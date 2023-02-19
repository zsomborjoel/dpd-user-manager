import UserFormPage from '../pages/user/UserFormPage';
import UserTablePage from '../pages/user/UserTablePage';
import { ROUTES } from './constants';

export default [
    {
        path: ROUTES.USER_FORM,
        component: UserFormPage,
        name: 'User Form',
    },
    {
        path: ROUTES.USER_TABLE,
        component: UserTablePage,
        name: 'User Table',
    },
];
