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

import { routes } from './users.routes';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
        UserListComponent
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
  providers: [UsersService]
})
export class UsersModule {
    public static routes = routes;
}
