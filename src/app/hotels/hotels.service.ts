import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { IHotel } from './hotel.interface';

export const iHotel: IHotel[] = [{
        _id: '12werr',
        name: 'asdf',
        address: 'qwerty',
        type: '3-star',
        city: 'bang',
        state: 'KA',
        country: 'ind',
        _v: 0
    }];

@Injectable()

export class HotelsService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    constructor (private http: Http) {}

    public getHotels() {
        return this.http.get('/api/users').map((res) => res.json());
    }

    public addHotel1(hotel) {
        return this.http.post('/user', JSON.stringify(hotel), this.options);
    }

    public addHotel(hotel): Observable<IHotel[]> {
        return of(iHotel);
    }
}