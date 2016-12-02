import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseComponent } from './database/database.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
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
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DatabasesRoutingModule { }