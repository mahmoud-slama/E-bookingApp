package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IHotelService;
import com.chebbi.security.entities.Hotel;
import com.chebbi.security.repository.HotelRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class HotelServiceImpl implements IHotelService {


    @Autowired
    HotelRepository hotelRepository ;

    @Override
    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @Override
    public void removeHotel(Integer id) {
        if (retrieveHotel(id)==null)
        {
            System.out.print("Hotel DOES NOT EXISTS");

        }
        hotelRepository.deleteById(id);
    }

    @Override
    public Hotel retrieveHotel(Integer id) {
        return hotelRepository.findById(id).orElse(null);
    }

    @Override
    public List<Hotel> retrieveAllHotel() {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel updateHotel(Hotel hotel) {

        System.out.print("Information(s) successfully updated");
        return hotelRepository.save(hotel);
    }
}
