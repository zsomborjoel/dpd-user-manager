import { PhoneDTO } from '../DTOs/PhoneDTO';
import { Phone } from '../models/Phone';

const dtoToModel = (dto: PhoneDTO): Phone => ({
    id: dto.id,
    number: dto.number,
});

const modelToDto = (model: Phone): PhoneDTO => ({
    id: model.id,
    number: model.number,
});

const dtosToModelArray = (dtos: PhoneDTO[]): Phone[] => dtos.map(dtoToModel);

const modelsToDtoArray = (dtos: Phone[]): PhoneDTO[] => dtos.map(modelToDto);

export default {
    dtoToModel,
    dtosToModelArray,
    modelToDto,
    modelsToDtoArray,
};
