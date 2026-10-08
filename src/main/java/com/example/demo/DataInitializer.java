package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner createDefaultAdmin(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {

            String email = "admin@gmail.com";

            if (userRepository.findByEmail(email).isEmpty()) {

                User admin = new User();

                admin.setName("Admin");
                admin.setEmail(email);
                admin.setPassword(
                        passwordEncoder.encode("admin123")
                );
                admin.setRole("ADMIN");

                userRepository.save(admin);

                System.out.println(
                        "Default Admin Created: admin@gmail.com / admin123"
                );
            }
        };
    }
}