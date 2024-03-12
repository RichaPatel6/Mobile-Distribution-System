package com.example.siddhimobiles.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Product;
import com.example.siddhimobiles.repository.ProductRepository;

@Service
public class ProductServices {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServices(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> getOneProduct(Long id) {
        return productRepository.findById(id);
    }

    public Product addNewProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteOneProduct(Long id) {
        productRepository.deleteById(id);
    }
}
