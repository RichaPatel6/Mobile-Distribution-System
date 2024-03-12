package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Suppliers;
import com.example.siddhimobiles.repository.SupplierRepository;

@Service
public class SupplierServices {
	@Autowired
	private SupplierRepository suppliersRepositoryRef;
	
	public Collection<Suppliers> getAllSuppliers(){
		Collection<Suppliers> allSuppliers = suppliersRepositoryRef.findAll();
		return allSuppliers;
	}
	
	public Suppliers getOneSuppliers(Long id) {
		Suppliers foundSuppliers = null;
		Optional<Suppliers> opt = suppliersRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundSuppliers = opt.get();
		return foundSuppliers;
	}
	
	public void addNewSuppliers(Suppliers suppliersRef) {
		suppliersRepositoryRef.save(suppliersRef);
	}
	
	public void deleteOneSuppliers(Long id) {
		suppliersRepositoryRef.deleteById(id);
	}
	// In SupplierServices
	public Suppliers getSupplier(Long supplierId) {
	    return suppliersRepositoryRef.findById(supplierId).orElse(null); // Adjust based on your actual repository method
	}
}
