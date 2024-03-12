package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {

}
