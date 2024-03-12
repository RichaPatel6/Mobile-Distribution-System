package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Optionals;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Review;
import com.example.siddhimobiles.repository.ReviewRepositpory;

@Service
public class ReviewServices {
	@Autowired
	private ReviewRepositpory reviewRepositroyRef;
	
	public Collection<Review> getAllReviews(){
		Collection<Review> allReviews = reviewRepositroyRef.findAll();
		return allReviews;
	}
	
	public Review getOneReview(Long id) {
		Review foundReview = null;
		Optional<Review> opt = reviewRepositroyRef.findById(id);
		if(!opt.isEmpty())
			foundReview = opt.get();
		return foundReview;
	}
	
	public void addNewReview(Review reviewRef) {
		reviewRepositroyRef.save(reviewRef);
	}
	
	public void deleteOneReview(Long id) {
		reviewRepositroyRef.deleteById(id);
	}

}
