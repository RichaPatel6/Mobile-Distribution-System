package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Review;
import com.example.siddhimobiles.service.ReviewServices;

@RestController
public class ReviewController {
	@Autowired
	private ReviewServices reviewServiceRef;
	
	@GetMapping("/review")
	public Collection<Review> getAllReviews(){
		Collection<Review> allReviews = reviewServiceRef.getAllReviews();
		return allReviews;
	}
	
	@GetMapping("/review/{reviewId}")
	public Review getOneReview(@PathVariable("reviewId")Long id) {
		Review foundReview = reviewServiceRef.getOneReview(id);
		return foundReview;
	}
	
	@PostMapping("/review")
	public void addNewReview(@RequestBody Review reviewRef) {
		System.out.println(reviewRef);
		reviewServiceRef.addNewReview(reviewRef);
		
	}
	
	@DeleteMapping("/review/{reviewId}")
	public void deleteOneReview(@PathVariable("reviewId") Long id) {
		reviewServiceRef.deleteOneReview(id);
	}
	
}
