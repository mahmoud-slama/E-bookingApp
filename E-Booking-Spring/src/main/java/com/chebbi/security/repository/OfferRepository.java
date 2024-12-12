package com.chebbi.security.repository;

import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OfferRepository extends JpaRepository<Offre,Integer> {


}
