# Static Site - Docker & Nginx

A simple static website containerized using Docker and served through Nginx.

## Technologies
- Docker
- Nginx
- HTML

## Project Structure
.
├── Dockerfile
├── README.md
├── app
│   ├── index.html
│   ├── script.js
│   └── style.css
└── nginx.conf

2 directories, 6 files

## Build Docker Image

```bash
docker build -t static-site:latest .
```

## Run Container

```bash
ddocker run -d --name static-site -p 8080:80 static-site:latest
```

## Access Website

http://localhost:8080

## Health Check

```bash
curl http://localhost:8080/health
```

Expected response:

```text
healthy
```

## Check Container Health

```bash
docker ps
```

## Stop Container

```bash
docker stop static-site
docker rm static-website
```
