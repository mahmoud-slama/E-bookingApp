package com.chebbi.security.Services;

import com.chebbi.security.entities.Airline;
import com.chebbi.security.entities.Flight;

import java.util.List;
import java.util.Optional;

public interface IAirlineService {

    Airline addAirline (Airline airline);
    void removeAirline (Integer id);
    Airline retrieveAirline (Integer id);
    Optional<Flight> retrieveAirlineByairline (String airline);
    List<Airline> retrieveAllAirlines();

    Airline updateAirline( Airline airline);

}
