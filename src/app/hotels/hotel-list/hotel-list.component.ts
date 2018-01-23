import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Subject } from 'rxjs/Subject';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MatSnackBar, MatAutocompleteModule } from '@angular/material';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';

import { IHotel } from '../hotel.interface';
import { IVHotel } from '../hotel-view.interface';
import { HotelsService } from '../hotels.service';
import { Hotel } from '../hotel.component';
import { State } from '../state.class';


@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelListComponent implements OnInit {
  public countryCtrl: FormControl;
  public stateCtrl: FormControl;
  public cityCtrl: FormControl;
  public filteredStates: Observable<State[]>;
  public addHotelForm: FormGroup;
  public hotel: Hotel;
  public hotelModel: IHotel[]= [];
  public hotelViewModel: IVHotel;
  public name = new FormControl('', Validators.required);
  public type = new FormControl('', Validators.required);
  public address = new FormControl('');
  public step = 0;
  public states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  // tslint:disable-next-line:max-line-length
  constructor(public _hotelsService: HotelsService, public snackBar: MatSnackBar, public formBuilder: FormBuilder) {
    this.hotel = new Hotel(_hotelsService);
    this.countryCtrl = new FormControl();
    this.stateCtrl = new FormControl();
    this.cityCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.startWith(this.stateCtrl.value).
      map((state) => state ? this.filterStates(state) : this.states.slice()
    );
    this.addHotelForm = formBuilder.group({
      name: this.name,
      type: this.type,
      address: this.address
    });
    // this.openSnackBar('message', 'Delete');
  }

  public addHotel() {
    // debugger;
    this.hotelViewModel = {
      name: this.addHotelForm.value.name,
      type: this.addHotelForm.value.type,
      address: this.addHotelForm.value.address,
      city: this.cityCtrl.value,
      state: this.stateCtrl.value,
      country: this.countryCtrl.value
    };

    console.log(this.hotelViewModel);

    this.hotel.addHotel(this.hotelViewModel).subscribe(
            (res) => {
              console.log('res');
              console.log(res);
            },
            (error) => {
              console.log('error');
              console.log(error);
            }
        );
  }

  public setStep(index: number) {
    this.step = index;
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }


  public ngOnInit() {
    this.getHotel();
  }

  public filterStates(name: string) {
    return this.states.filter((state) =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  public getHotel() {
    // this.hotel.getHotel();
    // this.openSnackBar('message', 'Delete');
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
