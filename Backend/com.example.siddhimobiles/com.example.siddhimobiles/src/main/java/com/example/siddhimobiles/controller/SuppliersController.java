package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Suppliers;
import com.example.siddhimobiles.service.SupplierServices;

@RestController
public class SuppliersController {
	@Autowired
	private SupplierServices suppliersServicesRef;
	
	@GetMapping("/supplier")
	public Collection<Suppliers> getAllSuppliers() {
		Collection<Suppliers> allSuppliers = suppliersServicesRef.getAllSuppliers();
		return allSuppliers;
	}

	@GetMapping("/supplier/{supplierId}")
	public Suppliers getOneSuppliers(@PathVariable("supplierId") Long id) {
		Suppliers foundSuppliers = suppliersServicesRef.getOneSuppliers(id);
		return foundSuppliers;
	}

	@PostMapping("/supplier")
	public String addNewSuppliers(@RequestBody Suppliers suppliersRef) {
		System.out.println(suppliersRef);
		suppliersServicesRef.addNewSuppliers(suppliersRef);
		return suppliersRef + " : added";

	}

	@DeleteMapping("/supplier/{supplierId}")
	public String deleteOneSuppliers(@PathVariable("supplierId") Long id) {
		suppliersServicesRef.deleteOneSuppliers(id);
		return id + " : supplier deleted";
	}
}
