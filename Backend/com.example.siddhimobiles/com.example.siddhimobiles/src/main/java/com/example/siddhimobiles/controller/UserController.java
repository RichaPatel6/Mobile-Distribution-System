package com.example.siddhimobiles.controller;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Category;

import com.example.siddhimobiles.entity.User;
import com.example.siddhimobiles.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/user/{role}")
	public List<User> getUsersByRole(@PathVariable String role) {
		return userService.getUsersByRole(role);
	}

	@PostMapping("/regUser")
	public ResponseEntity<String> registerUser(@RequestBody User newUser) {
		return userService.registerUser(newUser);
	}

	@PostMapping("/loginUser")
	public ResponseEntity<String> loginUser(@RequestBody User logUser) {
		System.out.println(logUser);
		return userService.loginUser(logUser);
	}


	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		System.out.println(id);
		return userService.deleteUserById(id);
	}

}
