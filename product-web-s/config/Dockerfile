FROM websphere-liberty:springBoot2 as staging
COPY --chown=1001:0 target/product-web-s-0.0.1-SNAPSHOT.jar /staging/myFatApp.jar
RUN springBootUtility thin \
 --sourceAppPath=/staging/myFatApp.jar \
 --targetThinAppPath=/staging/myThinApp.jar \
 --targetLibCachePath=/staging/lib.index.cache
FROM websphere-liberty:springBoot2
COPY --from=staging /staging/lib.index.cache /lib.index.cache
COPY --from=staging /staging/myThinApp.jar /config/dropins/spring/productpro-s-web.jar