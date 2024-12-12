package com.chebbi.security.auth;

import com.chebbi.security.Services.IUserService;
import com.chebbi.security.ServicesImpl.EmailServiceImpl;
import com.chebbi.security.entities.User;
import com.chebbi.security.repository.UserReposirory;
import com.chebbi.security.utils.ForgotPasswordDto;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ForgotPasswordService {
    @Autowired
    private UserReposirory userRepository;
    @Autowired
    private IUserService userService;
    @Autowired
    private EmailServiceImpl emailService;

    public void resetPassword(ForgotPasswordDto forgotPasswordDto) {
        User user = userRepository.findByEmail(forgotPasswordDto.getEmail()).get();
        if (user == null) {
            throw new UserNotFoundException("User not found");
        }

        // generate new password
        String newPassword = generateNewPassword();


        // send password reset email
        sendPasswordResetEmail(user.getEmail(), newPassword);
    }

    String generateNewPassword() {
        // generate new password
        //random password that consists of 10 alphanumeric characters
        String newPassword = RandomStringUtils.randomAlphanumeric(10);
        return newPassword;
    }

    void sendPasswordResetEmail(String email, String newPassword) {
        // send password reset email
        emailService.sendSimpleEmail(email, "Password Reset","Your new password is: " + newPassword);
    }
}
