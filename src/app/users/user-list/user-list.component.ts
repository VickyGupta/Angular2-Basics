import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Subject } from 'rxjs/Subject';
import { DocumentNode } from 'graphql';
import { MatSnackBar } from '@angular/material';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { IBUser } from '../user-business.interface';
import { UsersService } from '../users.service';
import { User } from '../user.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  private users: IBUser;
  private user: User;
  constructor(public _usersService: UsersService, public snackBar: MatSnackBar) {
    this.user = new User(_usersService)
  }

  public ngOnInit() {
    this.getUser();
  }

  public getUser(){
    this.user.getUser();
    //this.openSnackBar('message', 'Delete');
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
