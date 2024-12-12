package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.FlightServiceImpl;
import com.chebbi.security.entities.Flight;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Flight")
@Slf4j
@CrossOrigin("http://localhost:4200/")
public class FlightRestController {


    @Autowired
    FlightServiceImpl flightService;


    @GetMapping("/show-all-flights")
    public List<Flight> retriveAllFlights() {
        List<Flight> flights = flightService.retrieveAllFlight();
        return flights;
    }
    @GetMapping("/show-flight/{id}")
    public Flight retrieveFlight(@Valid @PathVariable("id") Integer id) {
        return flightService.retrieveFlight(id);
    }


    @PostMapping("/add-flight")
    public ResponseEntity<String> addFlight(@Valid @RequestBody Flight fl) {
        Flight flight = flightService.addFlight(fl);
        return ResponseEntity.ok("Flight added successfully!");
    }
    @DeleteMapping("/remove-flight/{id}")
    public ResponseEntity<String> removeFlight(@PathVariable("id") Integer id) {
        flightService.removeFlight(id);
        return ResponseEntity.ok("Flight deleted successfully!");
    }

    @PutMapping("/update-flight")
    public ResponseEntity<String> updateFlight(@Valid @RequestBody Flight fl) {
        Flight flight  = flightService.updateFlight(fl);
        return ResponseEntity.ok("Flight updated successfully!");
    }

    @PostMapping("/addFlightToairline/{airlineId}")
    public ResponseEntity<Flight> addFlightToAirline(
            @PathVariable int airlineId,
            @RequestBody Flight flight) {
        Flight addedFlight = flightService.addFlightToAirline(airlineId, flight);
        return ResponseEntity.ok(addedFlight);
    }

    @GetMapping("/getFlightByairlines/{airlineId}/flights")
    public ResponseEntity<List<Flight>> getFlightsByAirline(@PathVariable int airlineId) {
        List<Flight> flights = flightService.getFlightsByAirline(airlineId);
        return ResponseEntity.ok(flights);
    }
}
