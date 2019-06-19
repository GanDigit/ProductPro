FROM anapsix/alpine-java:8
WORKDIR /
ADD target/product-api-0.0.1-SNAPSHOT.jar productpro-api.jar
RUN sh -c 'touch /productpro-api.jar'
EXPOSE 80
ENTRYPOINT ["java","-jar","/productpro-api.jar"]
