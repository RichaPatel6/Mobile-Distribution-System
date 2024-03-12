package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
