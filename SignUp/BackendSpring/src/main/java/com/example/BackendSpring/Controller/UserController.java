package com.example.BackendSpring.Controller;

import com.example.BackendSpring.entity.User;
import com.example.BackendSpring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        if (repo.existsByEmail(user.getEmail())) {
            return "Email already registered!";
        }
        repo.save(user);
        return "User registered successfully!";
    }

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
}
