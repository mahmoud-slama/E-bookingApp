package com.chebbi.security.utils;

import com.chebbi.security.ServicesImpl.EmailServiceImpl;
import com.chebbi.security.entities.User;
import com.chebbi.security.repository.UserReposirory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@EnableScheduling
public class NewsletterScheduler {
    @Autowired
    EmailServiceImpl emailService;
    @Autowired
    private UserReposirory userRepository;

    //chaque lundi midi
    //@Scheduled(cron = "0 0 12 ? * MON")
    //@Scheduled(cron = "0 * * * * ?")
    public void sendNewsletter() {
        List<User> subscribers = userRepository.findAllByIsSubscribed(true);
        for (User subscriber : subscribers) {
            emailService.sendSimpleEmail(subscriber.getEmail(), "Newsletter", "Here's your newsletter! " +
                    "https://za.pinterest.com/aqeelasasman/fashion-newsletters/");
        }
    }

}
