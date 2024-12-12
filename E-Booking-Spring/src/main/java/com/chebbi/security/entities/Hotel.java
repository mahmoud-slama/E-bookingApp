package com.chebbi.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
    @Getter
    @Setter
    @NoArgsConstructor /*constructeur vide*/
    @AllArgsConstructor /*constructeur avec tous les attributs*/
    @ToString
    public class Hotel implements java.io.Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;

    private String name ;
    private String location ;
    private int rating ;
    private  int numberofRoom;
    private Date fondationDate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "hotel")
    @JsonIgnore
    @ToString.Exclude
    private List<Offre> offres;
    }
