package com.chebbi.security.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements java.io.Serializable, UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id ;
    private String firstname;
    private  String lastname ;
    private String email ;
    private  String password ;
    @Enumerated(EnumType.STRING)
    private Role role ;

    @Enumerated(EnumType.STRING)
    private StatusUser statusUser = StatusUser.ACTIVE;

    @Lob
    @Column(columnDefinition = "BLOB")
    private int code;

    private boolean isSubscribed;


    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> list = new ArrayList<GrantedAuthority>();
        list.add(new SimpleGrantedAuthority(role.name()));
        return list;
    }

    @Override
    @JsonIgnore
    public String getUsername() {return email;}

    @Override
    public String getPassword() {
        return password;
    }
    @JsonIgnore

    @Override
    public boolean isAccountNonExpired() {return true;}

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {return true;}

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {return true;}

    @JsonIgnore
    @Override
    public boolean isEnabled() {return true;}
}
