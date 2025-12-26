package com.example.User.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String contact;
    private String lastName;
    private String password;
}
