package com.example.server.service;

import com.example.server.model.Women;
import org.springframework.http.HttpStatus;

@SuppressWarnings("SpellCheckingInspection")
public interface WomenService {
    Iterable<Women>getWomens();
    Women getWomenById(Long id);
    Women createWomen(Women women);
    Women updateWomen(Women women);
    HttpStatus deleteWomen(Long id);
}
