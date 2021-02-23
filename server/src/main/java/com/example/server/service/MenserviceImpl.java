package com.example.server.service;

import com.example.server.model.Men;
import com.example.server.repository.MenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service

  public class MenserviceImpl implements Menservice{


    @Autowired
    MenRepository menRepository;


    @Override
    public Iterable<Men> getMens() { return menRepository.findAll();}

    @Override
    public Men getMenById(Long id) {
        return menRepository.findById(id).get();
    }

    @Override
    public Men createMen(Men men) { return menRepository.save(men); }

    @Override
    public Men updateMen(Men men) { return menRepository.save(men); }

    @Override
    public HttpStatus deleteMen(Long id) { menRepository.deleteById(id); return HttpStatus.OK;}

}
