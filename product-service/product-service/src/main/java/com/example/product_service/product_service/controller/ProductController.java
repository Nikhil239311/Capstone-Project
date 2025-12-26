package com.example.product_service.product_service.controller;

import com.example.product_service.product_service.entity.Product;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import com.example.product_service.product_service.service.ProductService;

// import com.example.product_service.product_service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public Product create(@RequestBody Product product) {

        return productService.saveProduct(product);
    }

    @GetMapping
    public List<Product> getAll() {
        List<Product> products = productService.getAllProducts();


    for (Product p : products) {
        p.setImage("http://localhost:8082/images/" + p.getImage());
    }

    return products;
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return productService.getProductById(id);
    }
}
