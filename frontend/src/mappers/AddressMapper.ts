import { AddressDTO } from '../DTOs/AddressDTO';
import { Address } from '../models/Address';

const dtoToModel = (dto: AddressDTO): Address => ({
    id: dto.id,
    postalCode: dto.postalCode,
    city: dto.city,
    street: dto.street,
    houseNumber: dto.houseNumber,
    floor: dto.floor,
});

const modelToDto = (model: Address): AddressDTO => ({
    id: model.id,
    postalCode: model.postalCode,
    city: model.city,
    street: model.street,
    houseNumber: model.houseNumber,
    floor: model.floor,
});

const dtosToModelArray = (dtos: AddressDTO[]): Address[] => dtos.map(dtoToModel);

const modelsToDtoArray = (dtos: Address[]): AddressDTO[] => dtos.map(modelToDto);

export default {
    dtoToModel,
    dtosToModelArray,
    modelToDto,
    modelsToDtoArray,
};
