package com.dpd.backend.controllers.ping;

import com.dpd.backend.services.ping.PingDBService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ping")
public class PingController {

    private final PingDBService pingDBService;

    @GetMapping
    ResponseEntity ping() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/db")
    ResponseEntity pingDB() {
        pingDBService.pingDB();
        return ResponseEntity.ok().build();
    }

}
