package com.example.siddhimobiles.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.siddhimobiles.entity.Category;
import com.example.siddhimobiles.entity.Product;
import com.example.siddhimobiles.entity.Suppliers;
import com.example.siddhimobiles.service.CategoryServices;
import com.example.siddhimobiles.service.ProductServices;
import com.example.siddhimobiles.service.SupplierServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/products")
public class ProductController {

    private final ProductServices productService;
    
    @Autowired
    private CategoryServices categoryService;

    @Autowired
    private SupplierServices suppliersService;


    @Autowired
    public ProductController(ProductServices productService) {
        this.productService = productService;
    }

    @GetMapping("/allproducts")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productService.getOneProduct(id)
                .map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/product")
    public ResponseEntity<Product> addProduct(@RequestParam("name") String name,
                                              @RequestParam("description") String description,
                                              @RequestParam("price") Double price,
                                              @RequestParam("quantityInStock") Integer quantityInStock,
                                              @RequestParam("image") MultipartFile image,
                                              @RequestParam("categoryId") Long categoryId, // Assuming you pass the ID
                                              @RequestParam("supplierId") Long supplierId) throws IOException { // Assuming you pass the ID
        Category category = categoryService.getCategory(categoryId); // Implement this method in your service
        Suppliers supplier = suppliersService.getSupplier(supplierId); 
        
        if (category == null || supplier == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setQuantityInStock(quantityInStock);
        product.setCategory(category);
        product.setSupplier(supplier);
        
        if (!image.isEmpty()) {
            String imagePath = saveImage(image);
            product.setImage(imagePath);
        }

        Product savedProduct = productService.addNewProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }


    private String saveImage(MultipartFile file) throws IOException {
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            Path path = Paths.get("E:\\project18\\Frontend\\project-Siddhi_Mobiles\\my-app\\public\\images\\" + file.getOriginalFilename());
            Files.write(path, bytes);
            // Return the relative path or absolute path depending on how you plan to access it
            return path.toString();
        }
        return null; 
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.deleteOneProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
