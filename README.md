# Dockerized Link Shortener Service

This repository contains a Dockerized link shortener service built with Nest.js.

## Prerequisites

Before running the Docker container, ensure that you have Docker installed on your machine. You can download Docker from [https://www.docker.com/get-started](https://www.docker.com/get-started).

## Getting Started

1. Navigate to the project directory.

2. Build and run the Docker container using Docker Compose:

    ```bash
    docker-compose up -d
    ```

3. Once the container is running, you can access the link shortener service at [http://localhost:3000](http://localhost:3000).

## Making a cURL Request to the Link Shortener Service

To shorten a URL using the link shortener service, you can make a cURL request as follows:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:3000/shorten
