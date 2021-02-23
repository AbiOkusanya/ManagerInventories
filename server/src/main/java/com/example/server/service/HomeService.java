package com.example.server.service;

import com.example.server.model.Home;
import org.springframework.http.HttpStatus;

public interface HomeService {
    Iterable<Home> getHomes();
    Home getHomeById(Long id);
    Home createHome(Home home);
    Home updateHome (Home home);
    HttpStatus deleteHome(Long id);
}
