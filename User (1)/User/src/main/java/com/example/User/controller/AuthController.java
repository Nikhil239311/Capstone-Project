package com.example.User.controller;

import com.example.User.dto.*;
import com.example.User.model.User;
import com.example.User.service.userService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final userService userService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public JwtResponse login(@RequestBody LoginRequest request) {
        String token = userService.login(request);
        return new JwtResponse(token);
    }

    @GetMapping("/user/{email}")
    public User getUser(@PathVariable String email) {
        return userService.getUserData(email);
    }
}
