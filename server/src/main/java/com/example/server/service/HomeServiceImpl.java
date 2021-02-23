package com.example.server.service;


import com.example.server.model.Home;
import com.example.server.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class HomeServiceImpl implements HomeService {

    @Autowired
    HomeRepository homeRepository;

    @Override
    public Iterable<Home> getHomes(){return homeRepository.findAll();}

    @Override
    public Home getHomeById(Long id){ return homeRepository.findById(id).get();}

    @Override
    public Home createHome(Home home){return homeRepository.save(home);}

    @Override
    public Home updateHome (Home home){ return homeRepository.save(home);}

    @Override
    public HttpStatus deleteHome(Long id){homeRepository.deleteById(id);
    return  HttpStatus.OK;
    }
}


