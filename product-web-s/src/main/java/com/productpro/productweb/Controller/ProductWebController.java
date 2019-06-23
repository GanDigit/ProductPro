package com.productpro.productweb.Controller;


import com.productpro.productweb.model.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Configuration
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping({"/api"})
public class ProductWebController {

    @Value("${prop.api.server.url}")
    private String propServicePort;

    @GetMapping("/apiServiceURL")
    private ApiResponse getApiServiceURL() {

        String envApiServerUrl = System.getenv("ENV_API_SERVER_URL");

        System.out.println("ProductWebController apiServiceURL ENV_API_SERVER_URL ---> " + envApiServerUrl);
        System.out.println("ProductWebController apiServiceURL prop.api.server.url---> " + propServicePort);

        //If the env variable is set use it otherwise go with property variable.
        String url = envApiServerUrl;
        if (url == null || url.trim().isEmpty()) {
            url = propServicePort;
        }

        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setUrl(url);
        System.out.println("ProductWebController apiServiceURL ---> " + apiResponse.getUrl());
        return apiResponse;
    }

    @GetMapping("/loginUserName")
    private String getLoginUserName() {
        String username = "";
        try {
            Object principal =  SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            if (principal instanceof UserDetails) {
               username = ((UserDetails)principal).getUsername();
            } else {
               username = principal.toString();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("ProductWebController loginUserName ---> " + username);
        return username;
    }
}
