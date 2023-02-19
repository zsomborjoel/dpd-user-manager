package com.dpd.backend.controllers.user;

import com.dpd.backend.controllers.address.AddressMapper;
import com.dpd.backend.controllers.phone.PhoneMapper;
import com.dpd.backend.entities.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(uses = {AddressMapper.class, PhoneMapper.class})
public interface UserMapper {

    UserDTO toDTO(User user);

    List<UserDTO> toDTOList(List<User> users);

    User fromDTO(UserDTO userDTO);

    List<User> fromDTOList(List<UserDTO> userDTOS);

}
