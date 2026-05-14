# Docker Nginx API Gateway

A microservices-based **API Gateway** architecture built with Docker Compose and Nginx reverse proxy — featuring path-based routing, internal service discovery, and containerized Node.js microservices.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)

---

## Overview

This project implements a lightweight **API Gateway pattern** where all client traffic enters through a single Nginx entry point. Nginx inspects the request path and forwards it to the appropriate downstream microservice — no client ever talks directly to a service.

- `/users/*` → **User Service** (Node.js + Express)
- `/orders/*` → **Order Service** (Node.js + Express)

---

## Architecture

```
                          ┌─────────────────────────────────────────────┐
                          │               Docker Network                │
                          │                                             │
                          │   ┌──────────────────────────────────────┐  │
  Client (Browser/curl)   │   │          Nginx API Gateway           │  │
  ─────────────────────►  │   │            port 80 (public)          │  │
       HTTP Request           └──────────────┬───────────────────────┘  │
                          │                  │                          |
                          │       ┌──────────┴──────────┐               │
                          │       ▼                     ▼               │
                          │  ┌──────────┐         ┌──────────┐          │
                          │  │  User    │         │  Order   │          │
                          │  │ Service  │         │ Service  │          │
                          │  │ :3001    │         │ :3002    │          │
                          │  └──────────┘         └──────────┘          │
                          │                                             │
                          └─────────────────────────────────────────────┘

  Path Routing:
  /users/*   ──────────►  User Service
  /orders/*  ──────────►  Order Service
```

---

## Tech Stack

| Layer          | Technology       | Purpose                           |
|----------------|------------------|-----------------------------------|
| Gateway        | Nginx            | Reverse Proxy & Path Routing      |
| Microservice 1 | Node.js/Express  | User Service                      |
| Microservice 2 | Node.js/Express  | Order Service                     |
| Orchestration  | Docker Compose   | Container Management & Networking |

---

## Features

- **Nginx API Gateway** — single entry point for all client requests
- **Path-based routing** — `/users` and `/orders` routed independently
- **Reverse proxy architecture** — services are never exposed publicly
- **Service discovery** — Docker Compose DNS resolves service names internally
- **Internal Docker networking** — services communicate by container name
- **Containerized microservices** — each service runs in its own isolated container

---

## Project Structure

```
.
├── docker-compose.yml
├── nginx/
│   └── nginx.conf           
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── order-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
└── README.md
```

---

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) v20+
- [Docker Compose](https://docs.docker.com/compose/install/) v2+

### Run the Application

```bash
git clone <your-repo-url>
cd <project-folder>

docker compose up --build

docker compose up --build -d
```

### Stop the Application

```bash
docker compose down

docker compose down --remove-orphans
```

### View Logs

```bash
docker compose logs -f

docker compose logs -f user-service
docker compose logs -f order-service
docker compose logs -f nginx
```

---

