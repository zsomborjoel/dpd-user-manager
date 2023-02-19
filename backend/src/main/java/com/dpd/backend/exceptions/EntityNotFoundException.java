package com.dpd.backend.exceptions;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Map;

@Slf4j
@ResponseStatus(HttpStatus.NOT_FOUND)
public class EntityNotFoundException extends RuntimeException {

    private final Class<?> entityClass;
    private final Map<String, String> params;

    public EntityNotFoundException(final Class<?> entityClass, final Map<String, String> params) {
        this.entityClass = entityClass;
        this.params = params;
    }

    @Override
    public String getMessage() {
        return "Entity " + entityClass.getSimpleName() + " not found by " + params;
    }
}
