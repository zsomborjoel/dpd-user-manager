package com.dpd.backend.controllers.phone;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class PhoneDTO {

    private UUID id;
    private String number;

}
