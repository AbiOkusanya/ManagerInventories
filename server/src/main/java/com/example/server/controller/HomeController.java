package com.example.server.controller;

import com.example.server.model.Home;
import com.example.server.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping ("/homes")
public class HomeController {
    @Autowired
    HomeService homeService;

    @GetMapping
    public  Iterable<Home> getHomes() {return homeService.getHomes();}

    @PostMapping
    public Home createHome(@RequestBody Home home){return homeService.createHome(home);}

    @PatchMapping
    public Home updateHome (@RequestBody Home home){return  homeService.updateHome(home);}

    @DeleteMapping("/{id}")
    public HttpStatus deleteHome (@PathVariable Long id){return homeService.deleteHome(id);}


}
