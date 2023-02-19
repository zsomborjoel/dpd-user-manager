package com.dpd.backend.services.user;

import com.dpd.backend.entities.User;
import com.dpd.backend.exceptions.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getById(final UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(User.class, Map.of("id", id.toString())));
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public UUID save(final User user) {
        user.addPhoneRelation(user.getPhones());
        user.addAddressRelation(user.getAddresses());
        userRepository.save(user);
        log.info("User has been saved | [{}]", user);
        return user.getId();
    }

    public List<UUID> saveAll(final List<User> users) {
        userRepository.saveAll(users);
        log.info("This many users has been bulk saved | [{}]", users.size());
        return users.stream().map(User::getId).toList();
    }

}
