# 🗂️ Task Manager – Docker Microservices Application

## 📌 Description

This is a microservices-based Task Manager application developed using **Node.js** and **PostgreSQL**, containerized using Docker.

## ⚙️ Tech Stack

- Node.js (Web API)
- PostgreSQL (Database)
- Docker (manual CLI only)

## 🐳 Docker Commands

```bash
docker network create app-network

docker volume create db-data

docker run -d --name db-container --network app-network -v db-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=secret postgres

docker build -t web-service ./web

docker run -d --name web-container --network app-network -p 3000:3000 web-service
```

## 🧪 Sample API Test

```bash
curl http://localhost:3000
```

## 👨‍💻 Author

Abdul Haseeb – 2112172