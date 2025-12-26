package com.example.product_service.product_service.service.impl;


import com.example.product_service.product_service.repository.ProductRepository;
import com.example.product_service.product_service.service.ProductService;
import org.springframework.stereotype.Service;

import com.example.product_service.product_service.entity.Product;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
}

