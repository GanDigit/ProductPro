package com.productpro.productapi.service;

import com.productpro.productapi.model.Product;
import com.productpro.productapi.mq.MQSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.productpro.productapi.repository.ProductRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository repository;

    @Autowired
    MQSender mqSender;

    public List<Product> findAll() {
        List<Product> products = new ArrayList();
        repository.findAll().forEach(product -> products.add(product));
        return products;
    }

    public Product findById(int id) {
        return repository.findById(id).get();
    }

    public Product create(Product product) {
        //Save
        product = repository.save(product);

        //Send notification
        String msg = "A new product " + product.getName() + " has been added to the system";
        mqSender.sendMsg(msg);

        return product;
    }

    public Product update(Product product) {
        //Save
        repository.save(product);
        product = findById(product.getId());

        //Send notification
        String msg = "The product " + product.getName() + " has been updated in the system";
        mqSender.sendMsg(msg);

        return product;
    }

    public Product delete(int id) {
        //Find
        Product product = findById(id);
        if(product != null){

            //Delete
            repository.delete(product);

            //Send notification
            String msg = "The product " + product.getName() + " has been deleted from the system";
            mqSender.sendMsg(msg);
        }
        return product;
    }

}