package com.example.User.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.User.model.User;

public interface userRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
