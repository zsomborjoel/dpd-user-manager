#!/bin/bash

echo 'Setup started...'

# Frontend
# Build Docker image based on Dockerfile
docker build -t dpd-frontend /frontend --build-arg CICD_RUN_TAG=dpd1 --build-arg ENVIRONMENT=prod

echo 'Frontend dockerbuild done...'

# Start Docker container based on the built image
docker run -d -p 3000:80 --name dpd-frontend dpd-frontend

echo 'Frontend started...'

# Backend (+ PostgreSql)
# Start Docker container based on Docker Compose file
docker-compose -f /backend/docker-compose.yml up -d

echo 'Backend started...'
