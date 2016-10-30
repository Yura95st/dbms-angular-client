import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../shared/database.service';
import { Table } from '../shared/table.model';

@Component({
    selector: 'table',
    template: `
    <div ng-if="errorMsg">{{errorMsg}}</div>

    <h2>{{table?.Name}}</h2>
  `
})
export class TableComponent implements OnInit {

    private errorMsg: string;
    private table: Table;

    constructor(private dbService: DatabaseService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let routeParams = this.route.snapshot.params;

        this.loadTable(routeParams["dbName"], routeParams["tableName"]);
    }

    private loadTable(dbName: string, tableName: string) {
        this.dbService.getTable(dbName, tableName).subscribe(
            data => { this.table = data },
            error => this.handleError(error),
            () => console.log('Table loaded.')
        );
    }

    private handleError(error: any) {
        this.errorMsg = error;
        console.error(error)
    }    
}