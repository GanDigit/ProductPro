#!/usr/bin/env bash

cd ..
cd productpro-app-helm-charts
cd charts
helm lint productpro-web
helm lint productpro-api
cd ../../
helm lint productpro-app-helm-charts

