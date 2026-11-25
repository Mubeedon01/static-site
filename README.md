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

<img width="591" height="277" alt="the architecture" src="https://github.com/user-attachments/assets/9b210a58-0f32-46aa-9c43-d1d835e92dc8" />



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

<img width="957" height="538" alt="active website" src="https://github.com/user-attachments/assets/ad09deac-6c51-42e9-8109-f49819f32650" />



## Health Check

```bash
curl http://localhost:8080/health
```

Expected response:

```text
healthy
```

<img width="956" height="532" alt="terminal health" src="https://github.com/user-attachments/assets/4a908cd6-11c0-4504-848a-db2e71e9f722" />


## Check Container Health

```bash
docker ps
```

## Stop Container

```bash
docker stop static-site
docker rm static-website
```
