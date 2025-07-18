# Fullstack Dockerized Static Site (HTTP, No Domain)

This is a simple full-stack web application, fully Dockerized and deployed on a cloud VM using only the server's **public IP** — no domain or HTTPS required.
It is currently [here](http://20.40.40.6/) deployed on an Azure VM.



### Features
- Static HTML frontend that displays your name
- Node.js/Express backend serving your name as JSON at `/api/name`
- NGINX reverse proxy for unified routing
- Fully runnable with `docker-compose` on any Linux VM
```sh
docker compose up  —build
```

---

## Tech Stack

- HTML (frontend)
- Node.js + Express (backend)
- Docker & Docker Compose
- NGINX (as reverse proxy)

---

## Folder Structure
```
SimpleFullStack/
├── docker-compose.yml
├── frontend/
│ ├── Dockerfile
│ └── index.html
├── backend/
│ ├── Dockerfile
│ └── server.js
├── nginx/
│ ├── Dockerfile
│ └── default.conf
└── README.md
```
