import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../shared/database.service';
import { Table } from '../shared/table.model';

@Component({
    selector: 'table',
    template: `
    <h2>{{table.Name}}</h2>
  `
})
export class TableComponent implements OnInit {

    private table: Table;

    constructor(private dbService: DatabaseService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let routeParams = this.route.snapshot.params;

        this.table = this.dbService.getTable(routeParams["dbName"], routeParams["tableName"]);
    }
}