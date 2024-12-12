package com.chebbi.security.repository;

import com.chebbi.security.entities.Airline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirelineRepository extends JpaRepository<Airline,Integer> {
}
