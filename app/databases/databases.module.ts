import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { DatabasesRoutingModule } from './databases-routing.module';

import { DatabaseListComponent } from './database-list/database-list.component';
import { DatabaseComponent } from './database/database.component';
import { TableComponent } from './table/table.component';

import { DatabaseService } from './shared/database.service';

@NgModule({
  imports: [
    CommonModule,
    DatabasesRoutingModule
  ],
  declarations: [
    DatabaseListComponent,
    DatabaseComponent,
    TableComponent
  ],
  providers: [
    DatabaseService
  ],
})
export class DatabasesModule { }