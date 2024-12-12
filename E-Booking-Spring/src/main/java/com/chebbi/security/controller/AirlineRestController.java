package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.AirlineServiceImpl;
import com.chebbi.security.entities.Airline;
import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.ImageModel;
import com.chebbi.security.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Airline")
@Slf4j
@CrossOrigin("http://localhost:4200/")
public class AirlineRestController {

 @Autowired
 AirlineServiceImpl airlineService;
    @Autowired
    private ImageRepository imageRepository;

    @GetMapping("/show-all-airlines")
    public List<Airline> retriveAllAirlines() {
        List<Airline> airlines = airlineService.retrieveAllAirlines();
        return airlines;
    }
    @GetMapping("/show-airline/{id}")
    public Airline retrieveFlight(@Valid @PathVariable("id") Integer id) {
        return airlineService.retrieveAirline(id);
    }


    @PostMapping("/add-airline")
    public ResponseEntity<String> addFlight(@Valid @RequestBody Airline ar ) {
        Airline airline = airlineService.addAirline(ar);
        return ResponseEntity.ok("airline added successfully!");
    }
    @DeleteMapping("/remove-airline/{id}")
    public ResponseEntity<String> removeAirline(@PathVariable("id") Integer id) {
        airlineService.removeAirline(id);
        return ResponseEntity.ok("Airline deleted successfully!");
    }



}
