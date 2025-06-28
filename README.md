Haseeb's Docker Microservices: Task Manager App

 Description
A basic microservice app using Docker. It has a Node.js web server and PostgreSQL database. All components are containerized and manually networked using Docker.

 Architecture
- Web Service: Node.js app
- Database: PostgreSQL
- Connected via Docker bridge network `haseeb-network`
- Docker volume stores persistent DB data
 Commands to Run:
docker network create haseeb-network

docker volume create haseeb-db-data

docker run -d --name haseeb-db --network haseeb-network -v haseeb-db-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=haseebpass postgres

docker build -t haseeb/web-service ./web

docker run -d --name haseeb-web --network haseeb-network -p 3000:3000 haseeb/web-service

docker run -d --name haseeb-web-2 --network haseeb-network -p 3001:3000 haseeb/web-service
