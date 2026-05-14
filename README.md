# Docker Nginx API Gateway

A microservices-based API Gateway architecture built using Docker Compose and Nginx reverse proxy.

## Features
- Nginx API Gateway
- User and Order microservices
- Docker containerization
- Internal Docker networking
- Path-based routing
- Reverse proxy architecture
- Service discovery using Docker Compose

## Architecture

```text
Client
   |
   v
[Nginx Gateway]
   |         |
   v         v
User Service Order Service
```

## Tech Stack
- Docker
- Docker Compose
- Nginx
- Node.js
- Express.js

## Run the Project

```bash
docker compose up --build
```

## API Endpoints

```text
http://localhost/users/
http://localhost/orders/
```
