import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <a [routerLink]="['/']" class="navbar-brand">DBMS Angular Client</a>
                </div>
            </div>
        </div>

        <div class="container body-content">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent { }
