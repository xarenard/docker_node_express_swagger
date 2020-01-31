# docker_node_simple
Simple Docker build with node express


#Without docker

## endpoint

### Swagger
http://localhost:8084/api-docs/

### API
http://localhost:8084/api/echo/v1

```
npm i
npm start
```

# With Docker

```
>docker build . -t foxy/node-api-echo
>docker images
  REPOSITORY           TAG                 IMAGE ID            CREATED             SIZE
  foxy/node-api-echo      latest              4ee3e8311189        2 minutes ago       971MB
>docker run -d --name node-api-echo -p 9090:8084 foxy/node-api-echo
e33878430fe57d577cc77ec99dcb51763999f6b78bcfa883f1a59197cc842889
>docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                    NAMES
e33878430fe5        foxy/node-api-echo   "docker-entrypoint.s…"   4 seconds ago       Up 3 seconds        0.0.0.0:9090->8084/tcp   node-api-echo

>curl localhost:9090/api/echo/v1

```
