package com.example.server.service;

import com.example.server.model.Men;
import org.springframework.http.HttpStatus;

public interface Menservice {
    Iterable<Men> getMens();
    Men getMenById(Long id);
    Men createMen(Men men);
    Men updateMen(Men men);
    HttpStatus deleteMen(Long id);
}