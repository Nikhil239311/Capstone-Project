// package com.example.api_gateway.api_gateway.config;


// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;

// @Configuration
//  class CorsConfig {

//     @Bean
//     public CorsFilter corsFilter() {
//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         CorsConfiguration config = new CorsConfiguration();

//         // Allow requests from localhost:4200 (Frontend)
//         config.addAllowedOrigin("http://localhost:4200"); 
//         config.addAllowedMethod("GET");
//         config.addAllowedMethod("POST");
//         config.addAllowedMethod("PUT");
//         config.addAllowedMethod("DELETE");
//         config.addAllowedMethod("OPTIONS");
//         config.addAllowedHeader("*");
//         config.setAllowCredentials(true); // Allow cookies (e.g., JWT tokens)

//         // Apply to all paths
//         source.registerCorsConfiguration("/**", config);

//         return new CorsFilter(source);
//     }
// }

