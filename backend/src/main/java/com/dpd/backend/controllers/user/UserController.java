package com.dpd.backend.controllers.user;

import com.dpd.backend.services.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@Validated
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/all")
    public ResponseEntity<List<UserDTO>> getAll() {
        return ResponseEntity.ok(
                userMapper.toDTOList(userService.getAll())
        );
    }

    @PostMapping
    public ResponseEntity<UUID> save(@Valid @RequestBody final UserDTO userDTO) {
        return ResponseEntity.ok(
                userService.save(userMapper.fromDTO(userDTO))
        );
    }

    @PostMapping("/all")
    public ResponseEntity<List<UUID>> saveAll(@Valid @RequestBody final List<UserDTO> userDTOS) {
        return ResponseEntity.ok(
                userService.saveAll(userMapper.fromDTOList(userDTOS))
        );
    }
    
}
