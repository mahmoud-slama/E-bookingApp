package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IBanUserService;
import com.chebbi.security.entities.BanUser;
import com.chebbi.security.entities.User;
import com.chebbi.security.repository.BanUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BanUserServiceImpl implements IBanUserService {
    @Autowired
    private BanUserRepository banRepository;

    public BanUser createBan(User user, String reason, String startDate, String endDate) {
        BanUser ban = new BanUser();
        ban.setUser(user);
        ban.setReason(reason);
        ban.setStartDate(startDate);
        ban.setEndDate(endDate);
        return banRepository.save(ban);
    }

    public List<BanUser> getBansByUser(User user) {
        return banRepository.findByUser(user);
    }

    public void deleteBan(BanUser ban) {
        banRepository.delete(ban);
    }

    @Override
    public BanUser getBanById(Integer banId) {
        Optional<BanUser> banOptional = banRepository.findById(banId);
        if (banOptional.isPresent()) {
            return banOptional.get();
        } else {
            return null;
        }
    }


}
