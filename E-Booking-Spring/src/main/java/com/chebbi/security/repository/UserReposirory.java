package com.chebbi.security.repository;

import com.chebbi.security.entities.Role;
import com.chebbi.security.entities.StatusUser;
import com.chebbi.security.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserReposirory extends JpaRepository <User,Integer>{
    Page<User> findAll(Specification<User> spec, Pageable pageable);
    List<User> findAll(Specification<User> spec, Sort sort);
    Optional<User> findByEmail(String email);

    List<User> findByRole(Role role);
    List<User>findByStatusUser(StatusUser statusUser);
    List<User> findAllByIsSubscribed(boolean b);

}
