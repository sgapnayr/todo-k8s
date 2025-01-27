<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Kubernetes with Minikube: Deploying a NestJS Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Deploy and test a NestJS application using Kubernetes and Minikube, with Docker for containerization and an easy-to-understand banana analogy 🍌 for Kubernetes concepts.</p>

---

## Project Overview

This repository showcases how to deploy a NestJS backend to a Minikube Kubernetes cluster. The example uses a Node.js/NestJS ecosystem, but the steps apply to any backend codebase.

### What You'll Learn:

- Containerizing a NestJS app with Docker 🐳
- Pushing Docker images to Docker Hub 🏗️
- Deploying applications to Kubernetes with Minikube 🚀
- Testing exposed services locally via Minikube URLs and port forwarding 🖥️
- Banana 🍌 analogy to simplify Kubernetes concepts.

---

## Prerequisites

Before starting, ensure you have the following installed:

- **VS Code** (or your preferred code editor)
- **Docker Desktop**
- **Docker Hub** (with an account)
- **Node.js**
- **Kubernetes** and **Minikube**

---

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Docker Commands

### Build the Docker Image:

```bash
docker build -t ryanpaglioneauthln/todo-k8s:latest .
```

### Run the Container Locally:

```bash
docker run -p 3000:3000 --name todo-k8s ryanpaglioneauthln/todo-k8s:latest
```

### Push the Image to Docker Hub:

```bash
docker login
docker push ryanpaglioneauthln/todo-k8s:latest
```

---

## Kubernetes Deployment with Minikube

### 1. Start Minikube:

```bash
minikube start --memory=4096 --cpus=2
```

### 2. Apply Kubernetes Configuration:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 3. Get the Exposed URL:

```bash
minikube service todo-k8s-service --url
```

### 4. Port Forwarding (Alternative):

```bash
kubectl port-forward service/todo-k8s-service 8080:3000
```

### 5. Test the Endpoint:

#### From Minikube URL:

```bash
curl $(minikube service todo-k8s-service --url)
```

#### From Port Forwarding:

```bash
curl http://localhost:8080
```

---

## Running the Application

### Development Mode:

```bash
npm run start
```

### Watch Mode:

```bash
npm run start:dev
```

### Production Mode:

```bash
npm run start:prod
```

---

## Testing

### Run Unit Tests:

```bash
npm run test
```

### Run E2E Tests:

```bash
npm run test:e2e
```

### Test Coverage:

```bash
npm run test:cov
```

---

## Support and Feedback

For questions or feedback, feel free to open an issue or reach out on [Twitter](https://twitter.com/ryanpaglione).

---

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
