package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
