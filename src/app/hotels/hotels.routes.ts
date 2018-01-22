import { HotelListComponent } from './hotel-list/hotel-list.component';
export const routes = [
    {
        path: '', children: [
            { path: '', component: HotelListComponent }

        ]
    },
];