package com.chebbi.security.repository;

import com.chebbi.security.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel,Integer> {
    

}
