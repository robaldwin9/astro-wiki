---
title: Docker Commands
description: Usefull Docker Commands
---

# Docker Commands
Most commonly used docker commands.

## List docker containers
`docker ps`
you can also use `watch docker ps` if you are specifically checking to see if the container is crashing.

## Compose

### Start container

#### Attatched
`docker compose up`

#### Detached
`docker compose up -d`

### Stop Container

#### Persist data
`docker compose down`

#### Clear Volumes
`docker compose down -v`

## Logs
`docker logs <conatainer-name>`

## Run Terminal Session Within Container
`docker exec -it <container-name> bash`
