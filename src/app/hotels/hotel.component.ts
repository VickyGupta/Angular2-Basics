import { IHotel } from './hotel.interface';
import { HotelsService } from './hotels.service';
import { IVHotel } from './hotel-view.interface';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class Hotel implements IVHotel, IHotel {
    public _id: string;
    public name: string;
    public address: string;
    public type: string;
    public city: string;
    public state: string;
    public country: string;
    // public ihotel: IHotel;
    constructor(public hotelsService: HotelsService) {
        // TODO
    }
    public getHotel() {
        this.hotelsService.getHotels().subscribe(
            (res) => {
                console.log(res);
            },
            (error) => console.log(error)
        );
    }

    public addHotel(hotel: IVHotel) {
        return this.hotelsService.addHotel(hotel);
        // .subscribe(
        //     (res) => {
        //         console.log(res);
        //         return of(res);
        //     },
        //     (error) => {
        //         console.log(error);
        //         return of(error);
        //     }
        // );
    }
}