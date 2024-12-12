package com.chebbi.security.Services;

import com.chebbi.security.entities.Flight;
import com.chebbi.security.entities.Offre;

import java.util.List;

public interface IOfferService {

    Offre addOfferToHotel(int hotelId, Offre offre);

    List<Offre> getOffersByHotel(int hotelId);

    Offre retrieveOffer (Integer id);

    void removeOffer (Integer id);

    List<Offre> retrieveAllOffers();

    Offre addOffer (Offre offre);
}
