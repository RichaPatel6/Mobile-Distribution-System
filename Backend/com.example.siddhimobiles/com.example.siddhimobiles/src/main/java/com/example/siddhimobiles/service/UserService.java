package com.example.siddhimobiles.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.example.siddhimobiles.entity.User;
import com.example.siddhimobiles.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	public List<User> getUsersByRole(String role) {
		return userRepo.findByuserRole(role);
	}

	public ResponseEntity<String> registerUser(User newUser) {
		if (userRepo.findByemail(newUser.getEmail()) != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("User already exists with this email: " + newUser.getEmail());
		} else {
			userRepo.save(newUser);
			return ResponseEntity.status(HttpStatus.OK).body("User registered successfully");
		}

	}

	public ResponseEntity<String> loginUser(User loginUser) {
		List<User> users = userRepo.findAll();
		for (User user : users) {
			if ((user.getEmail().equals(loginUser.getEmail()))
					&& user.getPassword().equals(loginUser.getPassword())) {
				return ResponseEntity.status(HttpStatus.OK).body(user.getRole() + "-" + user.getId());
			}
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("INVALID USERNAME OR PASSWORD");
	}

	public ResponseEntity<String> deleteUserById(Long id) {
		Optional<User> user = userRepo.findById(id);
		if (user.isPresent()) {
			userRepo.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body("USER DELETED SUCCESSFULLY");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("USER NOT FOUND WITH THIS ID");
	}

	public User updateUser(User newUser) {
		return userRepo.save(newUser);
	}

	public Optional<User> getUserById(Long id) {
		return userRepo.findById(id);
	}

}
