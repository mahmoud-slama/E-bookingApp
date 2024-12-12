package com.chebbi.security.repository;

import com.chebbi.security.entities.BanUser;
import com.chebbi.security.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BanUserRepository extends JpaRepository<BanUser, Integer> {
    List<BanUser> findByUser(User user);
}

