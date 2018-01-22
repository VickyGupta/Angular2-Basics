import { IUser } from './user.interface';
import { UsersService } from './users.service';
import { IBUser } from './user-business.interface';

export class User implements IUser {
    public name: string;
    public mobileNumber: number;
    constructor(public usersService: UsersService) {
        // TODO
    }
    public getUser() {
        this.usersService.getUsers().subscribe(
            (res) => {
                console.log(res);
            },
            (error) => console.log(error)
        );
    }
}