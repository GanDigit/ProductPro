#!/usr/bin/env bash

echo "build Started ...."
pwd
ls -l

cd ..

##mvn clean package

##docker build -f config/Dockerfile -t myclusterhcl1.icp:8500/default/productpro-api:latest .

docker login -u admin -p admin myclusterhcl1.icp:8500

docker push myclusterhcl1.icp:8500/default/productpro-api:latest

echo "build completed ...."