package com.example.User.service;

import com.example.User.dto.LoginRequest;
import com.example.User.dto.RegisterRequest;
import com.example.User.model.User;


public interface userService {

    User register(RegisterRequest request);

    String login(LoginRequest request);

    User getUserData(String email);
}
