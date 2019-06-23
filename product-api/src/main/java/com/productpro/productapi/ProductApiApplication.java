package com.productpro.productapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.support.converter.MappingJackson2MessageConverter;
import org.springframework.util.ErrorHandler;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.jms.ConnectionFactory;

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST,
        RequestMethod.OPTIONS, RequestMethod.PUT, RequestMethod.TRACE, RequestMethod.PATCH})
@SpringBootApplication
@EnableJms
public class ProductApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductApiApplication.class, args);
	}


    @Bean
    public JmsListenerContainerFactory<?> myFactory(ConnectionFactory connectionFactory, DefaultJmsListenerContainerFactoryConfigurer configurer) {

        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        configurer.configure(factory, connectionFactory);

        // anonymous class
        factory.setErrorHandler(
                new ErrorHandler() {
                    @Override
                    public void handleError(Throwable t) {
                        System.err.println("An error has occurred in the transaction 1111---------> **** --------->" + t.toString());
                        t.printStackTrace();
                    }
                });

        // lambda function
        factory.setErrorHandler(t -> {
            System.err.println("An error has occurred in the transaction 2222 ---------> **** --------->" + t.toString());
            t.printStackTrace();
        });

        factory.setMessageConverter(new MappingJackson2MessageConverter());

        configurer.configure(factory, connectionFactory);

        return factory;
    }

}
