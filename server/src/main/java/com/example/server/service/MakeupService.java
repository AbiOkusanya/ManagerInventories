package com.example.server.service;

import com.example.server.model.Makeup;

import org.springframework.http.HttpStatus;

public interface MakeupService {
    Iterable <Makeup> getMakeup();
    Makeup getMakeupById(Long id);
    Makeup createMakeup(Makeup makeup);
    Makeup updateMakeup(Makeup makeup);
    HttpStatus deleteMakeup(Long id);

}
