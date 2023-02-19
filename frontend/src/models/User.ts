import { Address } from './Address';
import { Phone } from './Phone';

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    mothersName: string;
    taxId: string;
    socialSecurityNumber: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    addresses: Address[];
    phones: Phone[];
}
