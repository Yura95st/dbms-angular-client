import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Database } from './database.model';
import { Table } from './table.model';

@Injectable()
export class DatabaseService {
    private static baseUrl: string = 'http://dbmsapp.azurewebsites.net/api';
    // private static baseUrl: string = 'http://localhost:62227/api';

    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append("Accept", "application/json");
    }

    getDbNames(): Observable<string[]> {
        return this.http.get(`${DatabaseService.baseUrl}/databases`, { headers: this.headers })
            .map(response => response.json());
    }

    getDatabase(dbName: string): Observable<Database> {
        return this.http.get(`${DatabaseService.baseUrl}/databases/${dbName}`, { headers: this.headers })
            .map(response => response.json());
    }

    getTable(dbName: string, tableName: string): Observable<Table> {
        return this.http.get(`${DatabaseService.baseUrl}/databases/${dbName}/${tableName}`, { headers: this.headers })
            .map(response => response.json());
    }

    getTableProjection(dbName: string, tableName: string, attributesNames: string[]): Observable<Table> {
        let queryUrl: string = `${DatabaseService.baseUrl}/databases/${dbName}/${tableName}/projection`;

        let isFirst: boolean = true;
        for (let attributesName of attributesNames) {
            queryUrl += `${isFirst ? "?" : "&"}attributesNames=${attributesName}`;
            isFirst = false;
        }

        return this.http.get(queryUrl, { headers: this.headers })
            .map(response => response.json());
    }
}