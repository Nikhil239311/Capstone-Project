
package com.example.product_service.product_service.service;
import com.example.product_service.product_service.entity.Product;
import java.util.List;

public interface ProductService {

    Product saveProduct(Product product);

    List<Product> getAllProducts();

    Product getProductById(Long id);
}
