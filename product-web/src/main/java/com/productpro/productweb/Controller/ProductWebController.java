package com.productpro.productweb.Controller;


import com.productpro.productweb.model.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Configuration
public class ProductWebController {

    @Value("${product.api.service.url}")
    private String productApiServiceUrl;


    @GetMapping("/apiServiceURL")
    private ApiResponse getApiServiceURL() {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setUrl(productApiServiceUrl);

        System.out.println("apiServiceURL ---> " + apiResponse.getUrl());
        return apiResponse;
    }
}
