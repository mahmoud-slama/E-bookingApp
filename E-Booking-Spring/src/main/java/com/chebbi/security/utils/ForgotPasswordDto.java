package com.chebbi.security.utils;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class ForgotPasswordDto {
    @NotBlank
    private String email;
}
