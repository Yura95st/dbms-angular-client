import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../shared/database.service';
import { Database } from '../shared/database.model';

@Component({
    selector: 'database',
    template: `
    <h2>{{database?.Name}}</h2>
    
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Type the name of table">
        <span class="input-group-btn">
            <button class="btn btn-success" type="button">Create</button>
        </span>
    </div>
    
    <div *ngIf="errorMsg" class="alert alert-danger" role="alert">{{errorMsg}}</div>

    <div class="list-group" style="margin: 10px 0 0">
        <a *ngFor="let tableName of database?.TableNames" class="list-group-item" [routerLink]="['/databases', database?.Name, tableName]">{{tableName}}</a>
    </div>
  `
})
export class DatabaseComponent implements OnInit {

    private errorMsg: string;    
    private database: Database;

    constructor(private dbService: DatabaseService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let routeParams = this.route.snapshot.params;

        this.loadDatabase(routeParams["dbName"]);
    }

    private loadDatabase(dbName: string) {
        this.dbService.getDatabase(dbName).subscribe(
            data => { this.database = data },
            error => this.handleError(error),
            () => console.log('Database loaded.')
        );
    }

    private handleError(error: any) {
        this.errorMsg = error;
        console.error(error)
    }
}