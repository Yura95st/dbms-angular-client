import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
    selector: 'database-list',
    template: `
    <h2>Databases</h2>
    
    <ul>
      <li *ngFor="let dbName of dbNames">
        <a [routerLink]="['/databases',  dbName]">{{dbName}}</a>
      </li>
    </ul>
  `,
})
export class DatabaseListComponent implements OnInit {

    private dbNames: string[];

    constructor(private dbService: DatabaseService) {

    }

    ngOnInit() {
        this.dbNames = this.dbService.getDbNames();
    }
}