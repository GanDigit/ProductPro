#!/usr/bin/env bash

echo "build Started ...."
pwd
ls -l

cd ..

mvn clean package

docker version

docker login myclusterhcl1.icp:8500

docker build -f config/Dockerfile -t myclusterhcl1.icp:8500/productpro-app/productpro-web-s:latest .

docker push myclusterhcl1.icp:8500/productpro-app/productpro-web-s:latest

echo "build completed ...."