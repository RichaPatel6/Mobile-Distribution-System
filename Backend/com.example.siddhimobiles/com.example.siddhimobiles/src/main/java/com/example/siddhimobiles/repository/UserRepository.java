package com.example.siddhimobiles.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public List<User> findByuserRole(String userRole);
	public User findByemail(String email);

}
