package com.chebbi.security.repository;

import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FlightRepository extends JpaRepository<Flight,Integer> {

}
