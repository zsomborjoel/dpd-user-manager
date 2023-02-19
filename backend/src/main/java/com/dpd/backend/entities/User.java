package com.dpd.backend.entities;

import lombok.*;
import org.apache.commons.collections4.CollectionUtils;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;


@Entity
@Table(name = "\"user\"", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(onlyExplicitlyIncluded = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false, columnDefinition = "uuid")
    @ToString.Include
    private UUID id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "mothers_name")
    private String mothersName;

    @Column(name = "tax_id")
    private String taxId;

    @Column(name = "social_security_number", nullable = false, unique = true)
    private String socialSecurityNumber;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "place_of_birth")
    private String placeOfBirth;

    @Builder.Default
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            fetch = FetchType.LAZY)
    private Set<Address> addresses = new HashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "user",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            fetch = FetchType.LAZY)
    private Set<Phone> phones = new HashSet<>();

    // to handle bidirectional relationship correctly
    public void addAddressRelation(final Set<Address> addresses) {
        if (CollectionUtils.isEmpty(addresses)) {
            return;
        }
        addresses.forEach(address -> address.setUser(this));
    }

    public void addPhoneRelation(final Set<Phone> phones) {
        if (CollectionUtils.isEmpty(phones)) {
            return;
        }
        phones.forEach(phone -> phone.setUser(this));
    }
}
