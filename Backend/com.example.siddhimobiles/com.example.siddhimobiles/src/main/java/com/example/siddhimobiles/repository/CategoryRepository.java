package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
