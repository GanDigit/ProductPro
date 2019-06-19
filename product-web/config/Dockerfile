FROM anapsix/alpine-java:8
WORKDIR /
ADD target/product-web-0.0.1-SNAPSHOT.jar productpro-web.jar
RUN sh -c 'touch /productpro-web.jar'
EXPOSE 80
ENTRYPOINT ["java","-jar","/productpro-web.jar"]
