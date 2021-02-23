package com.example.server.controller;

import com.example.server.model.Men;
import com.example.server.service.Menservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping ("/mens")
public class MenController {
    @Autowired
    Menservice menservice;

    @GetMapping
    public Iterable<Men> getMens(){
        return menservice.getMens();
    }

    @PostMapping
    public Men createMen(@RequestBody Men men){
        return menservice.createMen(men);
    }

    @PatchMapping
    public Men updateMen(@RequestBody Men men){
        return  menservice.updateMen(men);
    }

    @DeleteMapping ("/{id}")
    public HttpStatus deleteMen (@PathVariable Long id){
        return menservice.deleteMen(id);
    }
}
