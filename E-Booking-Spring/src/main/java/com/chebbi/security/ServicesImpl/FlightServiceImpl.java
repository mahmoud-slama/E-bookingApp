package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IFlightervice;
import com.chebbi.security.entities.Airline;
import com.chebbi.security.entities.Flight;
import com.chebbi.security.repository.AirelineRepository;
import com.chebbi.security.repository.FlightRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Slf4j
@Service
public class FlightServiceImpl implements IFlightervice {


    @Autowired
    FlightRepository flightRepository;

    @Autowired
    AirelineRepository airelineRepository;
    @Override
    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    @Override
    public void removeFlight(Integer id) {
        if (retrieveFlight(id)==null)
        {
            System.out.print("Flight DOES NOT EXISTS");

        }
        flightRepository.deleteById(id);
    }


    @Override
    public Flight retrieveFlight(Integer id) {
        return flightRepository.findById(id).orElse(null);
    }


    @Override
    public List<Flight> retrieveAllFlight() {
        return flightRepository.findAll();
    }

    @Override
    public Flight updateFlight(Flight flight) {

        System.out.print("Information(s) successfully updated");
        return flightRepository.save(flight);

    }

    public Flight addFlightToAirline(int airlineId, Flight flight) {
        Optional<Airline> optionalAirline = airelineRepository.findById(airlineId);
        if (optionalAirline.isPresent()) {
            Airline airline = optionalAirline.get();
            flight.setAirlinee(airline);
            airline.getFlights().add(flight);
            return flightRepository.save(flight);
        } else {
            throw new IllegalArgumentException("Airline with ID " + airlineId + " not found");
        }
    }

    public List<Flight> getFlightsByAirline(int airlineId) {
        Optional<Airline> optionalAirline = airelineRepository.findById(airlineId);
        if (optionalAirline.isPresent()) {
            Airline airline = optionalAirline.get();
            return airline.getFlights();
        } else {
            throw new IllegalArgumentException("Airline with ID " + airlineId + " not found");
        }
    }
}
