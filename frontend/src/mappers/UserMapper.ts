import { UserDTO } from '../DTOs/UserDTO';
import { User } from '../models/User';
import AddressMapper from './AddressMapper';
import PhoneMapper from './PhoneMapper';

const dtoToModel = (dto: UserDTO): User => ({
    id: dto.id,
    email: dto.email,
    firstName: dto.firstName ?? '',
    lastName: dto.lastName ?? '',
    mothersName: dto.mothersName ?? '',
    taxId: dto.taxId ?? '',
    socialSecurityNumber: dto.socialSecurityNumber ?? '',
    dateOfBirth: dto.dateOfBirth,
    placeOfBirth: dto.placeOfBirth ?? '',
    addresses: AddressMapper.dtosToModelArray(dto.addresses),
    phones: PhoneMapper.dtosToModelArray(dto.phones),
});

const modelToDto = (model: User): UserDTO => ({
    id: model.id,
    email: model.email,
    firstName: model.firstName,
    lastName: model.lastName,
    mothersName: model.mothersName,
    taxId: model.taxId,
    socialSecurityNumber: model.socialSecurityNumber,
    dateOfBirth: model.dateOfBirth,
    placeOfBirth: model.placeOfBirth,
    addresses: AddressMapper.modelsToDtoArray(model.addresses ?? []),
    phones: PhoneMapper.modelsToDtoArray(model.phones ?? []),
});

const dtosToModelArray = (dtos: UserDTO[]): User[] => dtos.map(dtoToModel);

const modelsToDtoArray = (dtos: User[]): UserDTO[] => dtos.map(modelToDto);

export default {
    dtoToModel,
    dtosToModelArray,
    modelToDto,
    modelsToDtoArray,
};
