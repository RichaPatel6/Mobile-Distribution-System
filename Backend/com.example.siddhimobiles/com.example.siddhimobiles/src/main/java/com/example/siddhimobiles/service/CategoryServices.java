package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Category;
import com.example.siddhimobiles.repository.CategoryRepository;
@Service
public class CategoryServices {
	@Autowired
	private CategoryRepository categoryRepositoryRef;

	public Collection<Category> getAllCategories() {
		Collection<Category> allCategories = categoryRepositoryRef.findAll();
		return allCategories;
	}

	public Category getOneCategory(Long id) {
		Category foundCategory = null;
		Optional<Category> opt = categoryRepositoryRef.findById(id);
		if (!opt.isEmpty())
			foundCategory = opt.get();
		return foundCategory;
	}

	public void addNewCategory(Category categoryRef) {
		categoryRepositoryRef.save(categoryRef);
	}

	public String deleteOneCategory(Long id) {
		categoryRepositoryRef.deleteById(id);
		return id+": Deleted";
	}
	// In CategoryServices
	public Category getCategory(Long categoryId) {
	    return categoryRepositoryRef.findById(categoryId).orElse(null); // Adjust based on your actual repository method
	}

	


}
