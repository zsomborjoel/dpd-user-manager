package com.dpd.backend.controllers.address;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class AddressDTO {

    private UUID id;
    private String postalCode;
    private String city;
    private String street;
    private String houseNumber;
    private String floor;

}
