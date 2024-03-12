package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reviews")
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="review_id")
	private Long reviewerId;
	@Column(name="reviewer_name")
	private String reviewerName;
	@Column(name="reviewer_description")
	private String reviewDescription;
	@Column(name="reviewer_ratings")
	private int reviewRatings;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product productId;

	public Review() {
		// TODO Auto-generated constructor stub
	}

	public Review(Long reviewerId, String reviewerName, String reviewDescription, int reviewRatings, Product productId) {
		super();
		this.reviewerId = reviewerId;
		this.reviewerName = reviewerName;
		this.reviewDescription = reviewDescription;
		this.reviewRatings = reviewRatings;
		this.productId = productId;
	}

	public Long getReviewerId() {
		return reviewerId;
	}

	public void setReviewerId(long reviewerId) {
		this.reviewerId = reviewerId;
	}

	public String getReviewerName() {
		return reviewerName;
	}

	public void setReviewerName(String reviewerName) {
		this.reviewerName = reviewerName;
	}

	public String getReviewDescription() {
		return reviewDescription;
	}

	public void setReviewDescription(String reviewDescription) {
		this.reviewDescription = reviewDescription;
	}

	public int getReviewRatings() {
		return reviewRatings;
	}

	public void setReviewRatings(int reviewRatings) {
		this.reviewRatings = reviewRatings;
	}

	public Product getProductId() {
		return productId;
	}

	public void setProductId(Product productId) {
		this.productId = productId;
	}

	@Override
	public String toString() {
		return "Review [reviewerId=" + reviewerId + ", reviewerName=" + reviewerName + ", reviewDescription="
				+ reviewDescription + ", reviewRatings=" + reviewRatings + ", productId=" + productId + "]";
	}

		

}
