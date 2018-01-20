import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class UsersService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {}

    public getUsers() {
        return this.http.get('/api/users').map((res) => res.json());
    }

    public addUser(user) {
        return this.http.post('/user', JSON.stringify(user), this.options);
    }
}