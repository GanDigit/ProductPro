#!/usr/bin/env bash

echo "build Started ...."
pwd
ls -l

cd ..

mvn clean packagemyclusterhcl1

docker build -f config/Dockerfile -t myclusterhcl1.icp:8500/productpro-app/productpro-web:latest .

docker push myclusterhcl1.icp:8500/productpro-app/productpro-web:latest

echo "build completed ...."