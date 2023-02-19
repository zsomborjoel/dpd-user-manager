import { AddressDTO } from './AddressDTO';
import { PhoneDTO } from './PhoneDTO';

export interface UserDTO {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    mothersName: string | null;
    taxId: string | null;
    socialSecurityNumber: string | null;
    dateOfBirth: Date;
    placeOfBirth: string | null;
    addresses: AddressDTO[];
    phones: PhoneDTO[];
}
