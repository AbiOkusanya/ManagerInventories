package com.example.server.controller;

import com.example.server.model.Women;
import com.example.server.service.WomenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/womens")
public class WomenController {
    @Autowired
    WomenService womenService;

    @GetMapping
    public Iterable<Women> getWomens(){
        return womenService.getWomens();
    }

    @PostMapping
    public Women createWomen(@RequestBody Women women){
        return womenService.createWomen(women);
    }

    @PatchMapping
    public Women updateWomen(@RequestBody Women women){
        return womenService.updateWomen(women);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteWomen(@PathVariable Long id){
    return womenService.deleteWomen(id);
    }
}
