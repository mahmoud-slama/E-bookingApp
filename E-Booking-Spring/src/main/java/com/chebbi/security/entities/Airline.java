package com.chebbi.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor /*constructeur vide*/
@AllArgsConstructor /*constructeur avec tous les attributs*/
@ToString
public class Airline implements java.io.Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int id ;
    private String name;
    private int rating ;
    private Date dateofCrea ;
    private  String pays;
    private String imageUrl;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "airlinee")
    @JsonIgnore
    @ToString.Exclude
    private List<Flight> flights;




}
