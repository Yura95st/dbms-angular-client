import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    LocationStrategy,
    HashLocationStrategy,
} from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'databases',
                pathMatch: 'full'
            },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
export class AppRoutingModule { }