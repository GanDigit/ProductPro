#!/usr/bin/env bash
echo 'installation started '

helm install --name productpro-helm ../productpro-app-helm-charts --tls

echo 'installation completed'
