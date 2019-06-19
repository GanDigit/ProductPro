package com.productpro.productapi.service;

import com.productpro.productapi.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.productpro.productapi.repository.ProductRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository repository;

    public List<Product> findAll() {
        List<Product> products = new ArrayList();
        repository.findAll().forEach(product -> products.add(product));
        return products;
    }

    public Product findById(int id) {
        return repository.findById(id).get();
    }

    public Product create(Product product) {
        return repository.save(product);
    }

    public Product update(Product product) {
        repository.save(product);
        product = findById(product.getId());
        return product;
    }

    public Product delete(int id) {
        Product product = findById(id);
        if(product != null){
            repository.delete(product);
        }
        return product;
    }

}