package com.dpd.backend.controllers.phone;

import com.dpd.backend.entities.Phone;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface PhoneMapper {

    @Mapping(target = "user", ignore = true)
    Phone fromDTO(PhoneDTO phoneDTO);

    List<Phone> fromDTOList(List<PhoneDTO> phoneDTOS);

}
