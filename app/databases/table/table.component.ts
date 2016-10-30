import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../shared/database.service';
import { Table } from '../shared/table.model';

@Component({
    selector: 'my-table',
    template: `
    <h2>{{table?.Name}}</h2>

    <select multiple (change)="onSelectChange($event.target.options)">
        <option *ngFor="let attribute of table?.Attributes" [value]="attribute.Name">
            {{attribute.Name}}
        </option>
    </select>
    
    <div *ngIf="errorMsg" class="alert alert-danger" role="alert">{{errorMsg}}</div>
    
    <table class="table table-bordered table-striped table-responsive">
        <thead>
        <tr>
            <th *ngFor="let attribute of resultTable?.Attributes">{{attribute.Name}}</th>
        </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of resultTable?.Rows">
                <td *ngFor="let rowValue of row.Value">{{rowValue}}</td>
            </tr>
        </tbody>
    </table>
  `
})
export class TableComponent implements OnInit {

    private errorMsg: string;

    private dbName: string;

    private table: Table;

    private resultTable: Table;

    constructor(private dbService: DatabaseService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        let routeParams = this.route.snapshot.params;

        this.dbName = routeParams["dbName"];

        this.loadTable(routeParams["tableName"]);
    }

    private loadTable(tableName: string) {
        this.dbService.getTable(this.dbName, tableName).subscribe(
            data => { 
                this.table = data;
                this.resultTable = data;
            },
            error => this.handleError(error),
            () => console.log('Table loaded.')
        );
    }

    private loadTableProjection(attributesNames: string[]) {
        this.dbService.getTableProjection(this.dbName, this.table.Name, attributesNames).subscribe(
            data => { 
                this.resultTable = data 
            },
            error => this.handleError(error),
            () => console.log('Table projection loaded.')
        );
    }    

    private onSelectChange(options: HTMLOptionsCollection) {
        let attributesNames: string[] = [];

        for (let i = 0; i < options.length; i++)
        {
            let option = options[i];
            if (option.selected)
            {
                attributesNames.push(option.value);
            }
        }

        if (attributesNames.length == 0)
        {
            attributesNames = this.table.Attributes.map(item => item.Name);
        }

        this.loadTableProjection(attributesNames);
    }

    private handleError(error: any) {
        this.errorMsg = error;
        console.error(error)
    }
}