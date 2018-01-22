import { IHotel } from './hotel.interface';
import { HotelsService } from './hotels.service';
import { IBHotel } from './hotel-business.interface';

export class Hotel implements IHotel {
    public name: string;
    public mobileNumber: number;
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
}