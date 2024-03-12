package com.example.siddhimobiles.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @Column(name = "product_name", nullable = false)
    private String name;

    @Column(name = "product_description")
    private String description;

    
    @Column(name = "product_image")
    private String image; 

    @Column(name = "product_price", nullable = false)
    private Double price;

    @Column(name = "quantity_in_stock")
    private Integer quantityInStock;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "supplier_id")
    private Suppliers supplier;

   

    public Product() {
    }



	public Product(Long id, String name, String description, String image, Double price, Integer quantityInStock,
			Category category, Suppliers supplier) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.image = image;
		this.price = price;
		this.quantityInStock = quantityInStock;
		this.category = category;
		this.supplier = supplier;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}



	public Double getPrice() {
		return price;
	}



	public void setPrice(Double price) {
		this.price = price;
	}



	public Integer getQuantityInStock() {
		return quantityInStock;
	}



	public void setQuantityInStock(Integer quantityInStock) {
		this.quantityInStock = quantityInStock;
	}



	public Category getCategory() {
		return category;
	}



	public void setCategory(Category category) {
		this.category = category;
	}



	public Suppliers getSupplier() {
		return supplier;
	}



	public void setSupplier(Suppliers supplier) {
		this.supplier = supplier;
	}



	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", image="
				+ image + ", price=" + price + ", quantityInStock=" + quantityInStock + ", category="
				+ category + ", supplier=" + supplier + "]";
	}

 
}
