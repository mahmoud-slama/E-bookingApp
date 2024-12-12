package com.chebbi.security.Services;


import com.chebbi.security.entities.Hotel;

import java.util.List;

public interface IHotelService {
    Hotel addHotel (Hotel hotel);
    void removeHotel(Integer id);
    Hotel retrieveHotel (Integer id);

    List<Hotel> retrieveAllHotel();

    Hotel updateHotel(Hotel hotel);


}
