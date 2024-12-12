package com.chebbi.security.controller;

import com.chebbi.security.auth.AuthenticationService;
import com.chebbi.security.auth.AuthticationRequest;
import com.chebbi.security.auth.AuthticationResponse;
import com.chebbi.security.auth.RegistreRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private  final AuthenticationService Service;

    @PostMapping("/register")
    public ResponseEntity<AuthticationResponse> register (
            @RequestBody RegistreRequest request
            )
    {
        return  ResponseEntity.ok(Service.register(request) );
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthticationResponse> authenticate (
            @RequestBody AuthticationRequest request
    )
    {
        return  ResponseEntity.ok(Service.authenticate(request) );

    }

}
