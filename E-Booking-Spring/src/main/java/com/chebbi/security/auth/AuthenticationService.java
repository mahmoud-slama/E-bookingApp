package com.chebbi.security.auth;

import com.chebbi.security.config.JwtService;
import com.chebbi.security.entities.Role;
import com.chebbi.security.entities.User;
import com.chebbi.security.repository.UserReposirory;
import lombok.RequiredArgsConstructor;
import lombok.var;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
private  final UserReposirory reposirory;
private  final PasswordEncoder passwordEncoder;

private  final JwtService jwtService ;

private  final AuthenticationManager authenticationManager ;

    public AuthticationResponse register(RegistreRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.User)
                .build();
                reposirory.save(user);
        var jwtToken =  jwtService.generateToken(user);

        return  AuthticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthticationResponse authenticate(AuthticationRequest request) {
       authenticationManager.authenticate(
               new UsernamePasswordAuthenticationToken(
                       request.getEmail(),
                       request.getPassword()
               )
       );

       var user= reposirory.findByEmail(request.getEmail())
               .orElse(null);
       var jwtToken = jwtService.generateToken(user);
        return  AuthticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
