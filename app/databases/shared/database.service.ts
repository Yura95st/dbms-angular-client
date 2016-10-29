import { Database } from './database.model';
import { Table } from './table.model';
import { Attribute } from './attribute.model';

export class DatabaseService {

    private databases: Database[]

    constructor() {
        this.databases = [
            { Name: "dbOne", TableNames: ["dbOne.tableOne", "dbOne.tableTwo"] },
            { Name: "dbTwo", TableNames: ["dbTwo.tableOne", "dbTwo.tableTwo"] },
        ];
    }

    getDbNames(): string[] {
        return this.databases.map(d => d.Name);
    }

    getDatabase(dbName: string): Database {
        return this.databases.find(d => d.Name == dbName);
    }

    getTable(dbName: string, tableName: string): Table {
        return {Name: tableName, Attributes: [], Rows: []};
    }

    getTableProjection(dbName: string, tableName: string, attributes: Attribute[]): Table {
        return undefined;
    }
}