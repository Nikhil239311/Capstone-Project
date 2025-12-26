
package com.example.User.service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.User.dto.LoginRequest;
import com.example.User.dto.RegisterRequest;
import com.example.User.exception.ResourceNotFoundException;
import com.example.User.model.User;
import com.example.User.repository.userRepository;
import com.example.User.security.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class userServiceImpl implements userService {

    private final userRepository UserRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public User register(RegisterRequest req) {

        if (UserRepository.findByEmail(req.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
         user.setContact(req.getContact());
          user.setLastName(req.getLastName());

        // Encrypt password
        user.setPassword(passwordEncoder.encode(req.getPassword()));

        return UserRepository.save(user);
    }

    @Override
    public String login(LoginRequest req) {
        User user = UserRepository.findByEmail(req.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (!passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Create JWT token
        return jwtUtil.generateToken(user.getId(), user.getEmail());
    }

    @Override
    public User getUserData(String email) {
        return UserRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}
