package com.productpro.productapi.controller;


import com.productpro.productapi.model.Product;
import com.productpro.productapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({"/api/product"})
public class ProductController {

    @Autowired
    ProductService service;

    @CrossOrigin
    @GetMapping
    private List<Product> findAll() {
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    private Product findOne (@PathVariable("id") int id) {
        return service.findById(id);
    }

    @CrossOrigin
    @PostMapping
    private Product create(@RequestBody Product product) {
        return service.create(product);
    }

    @CrossOrigin
    @PutMapping
    private Product update(@RequestBody Product product) {
        return service.update(product);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private Product delete (@PathVariable("id") int id) {
        return service.delete(id);
    }

}
