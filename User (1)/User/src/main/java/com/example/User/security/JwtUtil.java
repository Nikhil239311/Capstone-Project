package com.example.User.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

   private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(
        "MY_SECRET_KEY_123456789012345678901234567890".getBytes() // 32+ chars
    );

    private final long EXPIRATION = 1000 * 60 * 60 * 10; // 10 hours

 public String generateToken(Long userId, String email) {
    return Jwts.builder()
            .setSubject(email)
            .claim("userId", userId)  
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
            .signWith(SECRET_KEY)
            .compact();
}


    public String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
