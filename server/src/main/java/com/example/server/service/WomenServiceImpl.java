package com.example.server.service;

import com.example.server.model.Women;
import com.example.server.repository.WomenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class WomenServiceImpl implements WomenService{

    @Autowired
    WomenRepository womenRepository;

    @Override
    public Iterable <Women> getWomens(){return womenRepository.findAll();}

    @Override
    public Women getWomenById(Long id){return womenRepository.findById(id).get();}

    @Override
    public Women createWomen(Women women){return  womenRepository.save(women);}

    @Override
    public Women updateWomen (Women women){return womenRepository.save(women);}

    @Override
    public HttpStatus deleteWomen(Long id){womenRepository.deleteById(id); return HttpStatus.OK;}
}
