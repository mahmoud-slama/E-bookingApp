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

public class Reclamation implements java.io.Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private  int id ;
        private Date daterec ;
        private String description ;
        private String motif ;

    @ManyToOne
    @ToString.Exclude
    @JsonIgnore
    User user;

}
