package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Category;
import com.example.siddhimobiles.service.CategoryServices;


@RestController
//@RequestMapping("/categories")
public class CategoryController {
	@Autowired
	private CategoryServices categoryServiceRef;
	
	@GetMapping("/category")
	public Collection<Category> getAllCategory() {
		Collection<Category> allCategory = categoryServiceRef.getAllCategories();
		System.out.println("allCategory");
		return allCategory;
	}

	@GetMapping("/category/{categoryId}")
	public Category getOneCategory(@PathVariable("categoryId") Long id) {
		Category foundCategory = categoryServiceRef.getOneCategory(id);
		return foundCategory;
	}

	@PostMapping("/category")
	public void addNewCategory(@RequestBody Category categoryRef) {
		System.out.println(categoryRef);
		categoryServiceRef.addNewCategory(categoryRef);

	}

	@DeleteMapping("/deletecat/{id}")
	public String deleteOneCategory(@PathVariable Long id) {
		String res = categoryServiceRef.deleteOneCategory(id);
		return res;
	}

}
