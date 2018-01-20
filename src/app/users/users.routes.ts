import { UserListComponent } from './user-list/user-list.component';
export const routes = [
    {
        path: '', children: [
            { path: '', component: UserListComponent }

        ]
    },
];