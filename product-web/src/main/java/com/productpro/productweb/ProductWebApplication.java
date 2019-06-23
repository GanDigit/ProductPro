package com.productpro.productweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@SpringBootApplication
public class ProductWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductWebApplication.class, args);
	}
}
