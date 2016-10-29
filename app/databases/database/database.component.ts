import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../shared/database.service';
import { Database } from '../shared/database.model';

@Component({
    selector: 'database',
    template: `
    <h2>{{database.Name}}</h2>

    <ul>
      <li *ngFor="let tableName of database.TableNames">
        <a [routerLink]="['/databases', database.Name, tableName]">{{tableName}}</a>
      </li>
    </ul>
  `
})
export class DatabaseComponent implements OnInit {

    private database: Database;

    constructor(private dbService: DatabaseService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let routeParams = this.route.snapshot.params;

        this.database = this.dbService.getDatabase(routeParams["dbName"]);
    }
}