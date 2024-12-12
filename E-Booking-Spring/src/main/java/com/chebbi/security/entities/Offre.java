package com.chebbi.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Offre implements java.io.Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String name ;
    private int numberOfDays ;
    private int cost ;
    private int numberOfPerson ;

    @Enumerated(EnumType.STRING)
    private TypeOffer typeOffer ;

    @ManyToOne
    @ToString.Exclude
    @JsonIgnore
    Hotel hotel;
}
