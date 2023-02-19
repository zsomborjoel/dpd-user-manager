package com.dpd.backend.services.ping;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

@Service
@RequiredArgsConstructor
public class PingDBService {

    private final EntityManager entityManager;

    public void pingDB() {
        entityManager.createNativeQuery("SELECT 1").getSingleResult();
    }

}
