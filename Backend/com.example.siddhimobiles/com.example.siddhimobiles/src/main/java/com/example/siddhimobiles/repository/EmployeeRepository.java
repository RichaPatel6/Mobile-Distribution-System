package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
