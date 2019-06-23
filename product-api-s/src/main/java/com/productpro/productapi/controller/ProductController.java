package com.productpro.productapi.controller;


import com.productpro.productapi.model.Product;
import com.productpro.productapi.service.ProductService;
import com.productpro.productapi.util.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST,
                                                            RequestMethod.OPTIONS, RequestMethod.PUT, RequestMethod.TRACE, RequestMethod.PATCH})
@RestController
@RequestMapping(path = {"/api/product"}, produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping
    private List<Product> findAll() {
        LogUtil.log("ProductController ----> findAll");
        return service.findAll();
    }

    @GetMapping("/{id}")
    private Product findOne (@PathVariable("id") int id) {
        LogUtil.log("ProductController ----> findOne");
        return service.findById(id);
    }

    @PostMapping
    private Product create(@RequestBody Product product) {
        LogUtil.log("ProductController ----> create");
        return service.create(product);
    }

    @PutMapping
    private Product update(@RequestBody Product product) {
        LogUtil.log("ProductController ----> update");
        return service.update(product);
    }

    @DeleteMapping("/{id}")
    private Product delete (@PathVariable("id") int id) {
        LogUtil.log("ProductController ----> delete");
        return service.delete(id);
    }

}
