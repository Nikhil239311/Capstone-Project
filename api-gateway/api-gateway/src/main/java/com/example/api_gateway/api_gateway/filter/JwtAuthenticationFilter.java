// package com.example.api_gateway.api_gateway.filter;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.security.Keys;
// import org.springframework.cloud.gateway.filter.GatewayFilterChain;
// import org.springframework.cloud.gateway.filter.GlobalFilter;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpStatus;
// import org.springframework.stereotype.Component;
// import org.springframework.web.server.ServerWebExchange;
// import reactor.core.publisher.Mono;

// import java.nio.charset.StandardCharsets;
// import javax.crypto.SecretKey;

// @Component
// public class JwtAuthenticationFilter implements GlobalFilter {

//     private static final String SECRET_KEY =
//             "MY_SECRET_KEY_123456789012345678901234567890";

//     @Override
//     public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

//         String authHeader = exchange.getRequest()
//                 .getHeaders()
//                 .getFirst(HttpHeaders.AUTHORIZATION);

//         // 1️⃣ Missing or invalid Authorization header
//         if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//             exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
//             return exchange.getResponse().setComplete();
//         }

//         // 2️⃣ Extract token
//         String token = authHeader.substring(7);

//         try {
//             SecretKey key = Keys.hmacShaKeyFor(
//                     SECRET_KEY.getBytes(StandardCharsets.UTF_8));

//             // 3️⃣ Validate token
//             Claims claims = Jwts.parserBuilder()
//                     .setSigningKey(key)
//                     .build()
//                     .parseClaimsJws(token)
//                     .getBody();

//             // (Optional) You can forward user info to downstream services
//             exchange.getRequest().mutate()
//                     .header("X-User-Id", claims.get("userId").toString())
//                     .header("X-Username", claims.getSubject())
//                     .build();

//         } catch (Exception e) {
//             // 4️⃣ Invalid or expired token
//             exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
//             return exchange.getResponse().setComplete();
//         }

//         // 5️⃣ Valid token → forward request
//         return chain.filter(exchange);
//     }
// }
