package com.chebbi.security.Services;

import com.chebbi.security.entities.BanUser;
import com.chebbi.security.entities.User;

import java.util.List;

public interface IBanUserService {
    public BanUser createBan(User user, String reason, String startDate, String endDate);
    public List<BanUser> getBansByUser(User user);
    public void deleteBan(BanUser ban) ;
    BanUser getBanById(Integer banId);
}
