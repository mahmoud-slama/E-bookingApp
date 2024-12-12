package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IOfferService;
import com.chebbi.security.entities.Airline;
import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.Hotel;
import com.chebbi.security.entities.Offre;
import com.chebbi.security.repository.HotelRepository;
import com.chebbi.security.repository.OfferRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class OfferServiceImpl implements IOfferService {

    @Autowired
    OfferRepository offerRepository;

    @Autowired
    HotelRepository hotelRepository ;


    @Override
    public Offre addOfferToHotel(int hotelId, Offre offre) {
        Optional<Hotel> optionalHotel = hotelRepository.findById(hotelId);
        if (optionalHotel.isPresent()) {
            Hotel hotel = optionalHotel.get();
            offre.setHotel(hotel);
            hotel.getOffres().add(offre);

            return offerRepository.save(offre);
        }
        else
            {
                throw new IllegalArgumentException("Hotel with ID " + hotelId + " not found");
            }
        }


    @Override
    public List<Offre> getOffersByHotel(int hotelId) {
        Optional<Hotel> optionalHotel = hotelRepository.findById(hotelId);
        if (optionalHotel.isPresent()) {
            Hotel hotel = optionalHotel.get();
            return hotel.getOffres();
        } else {
            throw new IllegalArgumentException("Hotel with ID " + hotelId + " not found");
        }
    }

    @Override
    public Offre retrieveOffer(Integer id) {
        return offerRepository.findById(id).orElse(null);
    }

    @Override
    public void removeOffer(Integer id) {
        if (retrieveOffer(id)==null)
        {
            System.out.print("Offer DOES NOT EXISTS");

        }
        offerRepository.deleteById(id);
    }

    @Override
    public List<Offre> retrieveAllOffers() {
        return offerRepository.findAll();
    }

    @Override
    public Offre  addOffer(Offre offre){return offerRepository.save(offre) ;}
}
