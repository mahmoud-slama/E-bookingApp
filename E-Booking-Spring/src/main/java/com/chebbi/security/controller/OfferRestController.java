package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.FlightServiceImpl;
import com.chebbi.security.ServicesImpl.OfferServiceImpl;
import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.Offre;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Slf4j
@RequestMapping("/Offer")
@CrossOrigin("http://localhost:4200/")
@RestController
public class OfferRestController {

    @Autowired
    OfferServiceImpl offerService;

    @GetMapping("/show-all-offres")
    public List<Offre> retriveAllFlights() {
        List<Offre> offres = offerService.retrieveAllOffers();
        return offres;
    }
    @GetMapping("/show-offre/{id}")
    public Offre retrieveOffer(@Valid @PathVariable("id") Integer id) {
        return offerService.retrieveOffer(id);
    }


    @DeleteMapping("/remove-offer/{id}")
    public ResponseEntity<String> removeFlight(@PathVariable("id") Integer id) {
        offerService.removeOffer(id);
        return ResponseEntity.ok("Offer deleted successfully!");
    }


    @PostMapping("/add-offer/{hotelId}")
    public ResponseEntity<Offre> addOfferToHotel(
            @PathVariable int hotelId,
            @RequestBody Offre offre) {
        Offre addedFlight = offerService.addOfferToHotel(hotelId, offre);
        return ResponseEntity.ok(addedFlight);
    }

    @GetMapping("/get-offer/{hotelId}/offers")
    public ResponseEntity<List<Offre>> getOfferByHotel(@PathVariable int hotelId) {
        List<Offre> offres = offerService.getOffersByHotel(hotelId);
        return ResponseEntity.ok(offres);
    }

    @PostMapping("/add-offer")
    public ResponseEntity<String> addOffer(@Valid @RequestBody Offre of) {
        Offre offre = offerService.addOffer(of);
        return ResponseEntity.ok("Offre added successfully!");
    }


}
