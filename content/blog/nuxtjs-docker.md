---
title: Running NuxtJS in a Docker container
description: Guide how to create and run a Nuxt PWA project in a Docker container and how to share the project without Docker Hub
createdAt: 2023-03-31T00:10:13+02:00
prevTitle: Customizing theme to add image width and height automatically in WordPress
prevUrl: wordpress-image-size
tags: tutorials, nuxt, vue, docker
---

## NuxtJS

[Nuxt](https://nuxtjs.org/) is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js.

## Docker Container

[Docker](https://www.docker.com/) is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments. 

## Why I use Nuxt with Docker?

I've been running Nuxt projects with [pm2](https://pm2.keymetrics.io/), but Nuxt 3 doesn't provide an easy way to run projects on different ports, so I've started using Docker to run multiple Nuxt projects on same server.

[NGINX](https://www.nginx.com/) sends the request to the Docker container's port, and the Docker container forwards the request to Nuxt's default port.

## Create a new Nuxt 3 app

To create a new starter project, open a terminal and enter the following command:

```bash
yarn create nuxt-app new-project
cd new-project
yarn
```

## Install Docker

You must first install Docker on your local machine before you can create a container for the Nuxt application. Choose your operating system from the list below and follow the setup instructions:

- [Linux](https://docs.docker.com/desktop/install/linux-install/)
- [Mac OS](https://docs.docker.com/desktop/install/mac-install/)
- [Windows](https://docs.docker.com/desktop/install/windows-install/)

## How to dockerize a Nuxt 3 app without using the Docker Hub

[Docker Hub](https://hub.docker.com/) offers only two private Docker containers and I don't want to share the codes publicly, so I only use Docker containers on my own server.

I develop the Nuxt project locally on port `3000` and update the codes on [GitHub](https://github.com/) from where I get the codes for the server. On the server, I build and run a Docker container with the `Dockerfile` file.


The only thing that needs to be changed for the Nuxt project is to create a `Dockerfile` file.

```bash
FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
```

## Building and running the Docker container

```bash
docker build -t new-project .
docker run -it -p 3500:3000 new-project
```

The command tells Docker to run the container and forward the exposed port `3500` to port `3000` on your server. You can now use `http://localhost:3500` to access your Nuxt app.

The following command displays the Docker containers that are currently running on your system:

```bash
docker ps -a
```

To stop your Docker container:

```bash
docker stop id
```

Thanks for reading!
