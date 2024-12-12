package com.chebbi.security.auth;

import com.chebbi.security.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistreRequest {

    private String firstname;
    private String lastname;
    private String email;
    private String password;



}
