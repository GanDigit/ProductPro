package com.productpro.productweb.Controller;


import com.productpro.productweb.model.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Configuration
public class ProductWebController {

    @Value("${PRODUCTPRO_API_SERVICE_HOST}")
    private String apiServiceHost;

    @Value("${PRODUCTPRO_API_SERVICE_PORT}")
    private String apiServicePort;


    @GetMapping("/apiServiceURL")
    private ApiResponse getApiServiceURL() {
        String url = "http://" + apiServiceHost + ":" + apiServicePort + "/";
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setUrl(url);
        System.out.println("apiServiceURL ---> " + apiResponse.getUrl());
        return apiResponse;
    }
}
