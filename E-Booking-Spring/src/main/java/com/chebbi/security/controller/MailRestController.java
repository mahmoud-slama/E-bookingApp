package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/mail")
public class MailRestController {
    @Autowired
    private EmailServiceImpl emailService;

   @PostMapping("/send-from-E_booking")
    public void sendMail(@RequestParam("to") String to,
                         @RequestParam("subject") String subject, @RequestParam("body") String body) {

       emailService.sendSimpleEmail(to, subject, body);

   }
}
