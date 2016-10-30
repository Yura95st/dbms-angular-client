import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
    selector: 'database-list',
    template: `
    <h2>Databases</h2>
    
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Type the name of table">
        <span class="input-group-btn">
            <button class="btn btn-success" type="button">Create</button>
        </span>
    </div>
    
    <div *ngIf="errorMsg" class="alert alert-danger" role="alert">{{errorMsg}}</div>

    <div class="list-group" style="margin: 10px 0 0">
        <a *ngFor="let dbName of dbNames" class="list-group-item" [routerLink]="['/databases',  dbName]">{{dbName}}</a>
    </div>
  `
})
export class DatabaseListComponent implements OnInit {

    private dbNames: string[];
    private errorMsg: string;

    constructor(private dbService: DatabaseService) {

    }

    ngOnInit() {
        this.loadDbNames();
    }

    private loadDbNames() {
        this.dbService.getDbNames().subscribe(
            data => { this.dbNames = data },
            error => this.handleError(error),
            () => console.log('DbNames loaded.')
        );
    }

    private handleError(error: any) {
        this.errorMsg = error;
        console.error(error)
    }
}