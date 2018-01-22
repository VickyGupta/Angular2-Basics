import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatAutocompleteModule
} from '@angular/material';

import { routes } from './hotels.routes';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsService } from './hotels.service';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
        HotelListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatAutocompleteModule
    // ApolloModule.forRoot(client)
  ],
  providers: [HotelsService]
})
export class HotelsModule {
    public static routes = routes;
}
