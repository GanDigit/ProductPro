#!/usr/bin/env bash
echo 'installation started '

helm install --name productpro-helm ../productpro-app-secured-helm-charts --tls

echo 'installation completed'
