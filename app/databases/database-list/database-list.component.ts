import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
    selector: 'database-list',
    templateUrl: "app/databases/database-list/database-list.component.html"
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