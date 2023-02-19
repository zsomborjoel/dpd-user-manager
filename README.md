# Dpd Form

## How to run the application

1.	Please go into the package folder „dpd-user-manager/backend”
2.	Run build: gradle clean build -x test

#### docker build frontend
```
docker build -t dpd-frontend ./frontend --build-arg CICD_RUN_TAG=dpd1 --build-arg ENVIRONMENT=prod
```

#### docker run frontend
```
docker run -d -p 3000:80 --name dpd-frontend dpd-frontend
```

#### docker compose backend
```
docker-compose -f ./backend/docker-compose.yml up -d
```