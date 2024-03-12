package com.example.siddhimobiles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Suppliers;

public interface SupplierRepository extends JpaRepository<Suppliers, Long> {

}
