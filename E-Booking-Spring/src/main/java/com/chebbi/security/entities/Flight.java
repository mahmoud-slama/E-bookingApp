package com.chebbi.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

    @Entity
    @Getter
    @Setter
    @NoArgsConstructor /*constructeur vide*/
    @AllArgsConstructor /*constructeur avec tous les attributs*/
    @ToString

public class Flight implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;
    private String  airline ;
    private  String  departureLoc ;
    private String  arrivalLoc  ;
    private Date  departureDate;
    private Date  arrivalDate;
    private int flightNumber;
    private String flightStatus ;
    private int flightCost ;

    @ManyToOne
    @ToString.Exclude
    @JsonIgnore
    Airline airlinee;

}
