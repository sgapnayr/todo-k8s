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
docker build -t <your-dockerhub-name>/todo-k8s:latest .
```

### Run the Container Locally:

```bash
docker run -p 3000:3000 --name todo-k8s <your-dockerhub-name>/todo-k8s:latest
```

### Push the Image to Docker Hub:

```bash
docker login
docker push <your-dockerhub-name>/todo-k8s:latest
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

## Check Out My Channel!

🎥 Check out my software channel on YouTube: [https://www.youtube.com/@programwithpags](https://www.youtube.com/@programwithpags)  
💬 If you have any questions about this tutorial, leave a comment on the Kubernetes video here: [https://www.youtube.com/watch?v=YRqaZdsRjYw](https://www.youtube.com/watch?v=YRqaZdsRjYw)

---

## Support and Feedback

For questions or feedback, feel free to open an issue or reach out on [Twitter](https://twitter.com/ryanpaglione).

---

## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).
