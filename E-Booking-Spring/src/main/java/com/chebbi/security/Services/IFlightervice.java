package com.chebbi.security.Services;


import com.chebbi.security.entities.Flight;

import java.util.List;
import java.util.Optional;

public interface IFlightervice {

    Flight addFlight (Flight flight);
    void removeFlight (Integer id);
    Flight retrieveFlight (Integer id);
    List<Flight> retrieveAllFlight();

    Flight updateFlight( Flight flight);

    Flight addFlightToAirline(int airlineId, Flight flight);

    List<Flight> getFlightsByAirline(int airlineId);
}
