package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.HotelServiceImpl;
import com.chebbi.security.entities.Hotel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/Hotel")
@Slf4j
@CrossOrigin("http://localhost:4200/")
public class HotelRestController {

    @Autowired
    HotelServiceImpl hotelService;


    @GetMapping("/show-all-hotels")
    public List<Hotel> retriveAllHotels() {
        List<Hotel> hotels = hotelService.retrieveAllHotel();
        return hotels;
    }
    @GetMapping("/show-hotel/{id}")
    public Hotel retrieveHotel(@Valid @PathVariable("id") Integer id) {
        return hotelService.retrieveHotel(id);
    }

    @PostMapping("/add-hotel")
    public ResponseEntity<String> addHotel(@Valid @RequestBody Hotel ht) {
        Hotel hotel = hotelService.addHotel(ht);
        return ResponseEntity.ok("Hotel added successfully!");
    }
    @DeleteMapping("/remove-hotel/{id}")
    public ResponseEntity<String> removeHotel(@PathVariable("id") Integer id) {
        hotelService.removeHotel(id);
        return ResponseEntity.ok("Hotel deleted successfully!");
    }

    @PutMapping("/update-hotel")
    public ResponseEntity<String> updateHotel(@Valid @RequestBody Hotel ht) {
        Hotel hotel  = hotelService.updateHotel(ht);
        return ResponseEntity.ok("Hotel updated successfully!");
    }
}
