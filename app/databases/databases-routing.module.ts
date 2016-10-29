import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseComponent } from './database/database.component';
import { TableComponent } from './table/table.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'databases/:dbName/:tableName',
                component: TableComponent
            },
            {
                path: 'databases/:dbName',
                component: DatabaseComponent
            },
            {
                path: 'databases',
                component: DatabaseListComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DatabasesRoutingModule { }