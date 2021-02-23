package com.example.server.service;

import com.example.server.model.Makeup;
import com.example.server.repository.MakeupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class MakeupServiceImpl implements MakeupService{

    @Autowired
    MakeupRepository makeupRepository;

    @Override
    public Iterable <Makeup> getMakeup(){ return makeupRepository.findAll();}

    @Override
    public  Makeup getMakeupById (Long id){return makeupRepository.findById(id).get();}

    @Override
    public  Makeup createMakeup (Makeup makeup) {return  makeupRepository.save(makeup);}

    @Override
    public Makeup updateMakeup (Makeup makeup){return  makeupRepository.save(makeup);}

    @Override
    public HttpStatus deleteMakeup (Long id){makeupRepository.deleteById(id); return  HttpStatus.OK;}
}
