package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IAirlineService;
import com.chebbi.security.Services.IBanUserService;
import com.chebbi.security.entities.Airline;
import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.ImageModel;
import com.chebbi.security.repository.AirelineRepository;
import com.chebbi.security.repository.FlightRepository;
import com.chebbi.security.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AirlineServiceImpl implements IAirlineService {


    @Autowired
    AirelineRepository airelineRepository;


    @Autowired
    ImageRepository imageRepository;


    @Override
    public void removeAirline(Integer id) {
        if (retrieveAirline(id)==null)
        {
            System.out.print("Airline DOES NOT EXISTS");

        }
        airelineRepository.deleteById(id);
    }

    @Override
    public Airline retrieveAirline(Integer id) {
        return airelineRepository.findById(id).orElse(null);
    }

    @Override
    public Optional<Flight> retrieveAirlineByairline(String airline) {
        return Optional.empty();
    }

    @Override
    public List<Airline> retrieveAllAirlines() {
        return airelineRepository.findAll();
    }

    @Override
    public Airline updateAirline(Airline airline) {
        return null;
    }

    @Override
    public Airline addAirline(Airline airline) {

        return airelineRepository.save(airline);
    }

    /*public String saveImage(MultipartFile imageFile) throws IOException {

        String fileName = imageFile.getOriginalFilename(); // You can generate a unique file name if needed
        String filePath = "/path/to/save/images/" + fileName;
        imageFile.transferTo(new File(filePath));

        return filePath;
    }
    */
}
