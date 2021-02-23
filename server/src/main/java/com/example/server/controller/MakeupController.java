package com.example.server.controller;

import com.example.server.model.Makeup;
import com.example.server.service.MakeupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/makeups")
public class MakeupController {

    @Autowired
    MakeupService makeupService;

    @GetMapping
    public Iterable<Makeup> getMakeups(){return makeupService.getMakeup();}

    @PostMapping
    public Makeup createMakeup(@RequestBody Makeup makeup) {return makeupService.createMakeup(makeup);}

    @PatchMapping
    public Makeup updateMakeup (@RequestBody Makeup makeup) {return makeupService.updateMakeup(makeup);}

    @DeleteMapping ("/{id}")
    public HttpStatus deleteMakeup (@PathVariable Long id) {return makeupService.deleteMakeup(id);}
}
