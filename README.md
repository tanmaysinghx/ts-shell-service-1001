# ts-shell-service-1001

## Overview
This project is a shell application containing multiple services (Eureka server, Node.js services, Angular frontend, Kafka), SpringBoot services orchestrated using Docker Compose.

## Prerequisites
  
- Docker
- Node.js (v18.x or later)
- MySQL (or another supported SQL database)
  
## Microservices and Microfrontends

- **ts-eureka-server-1005**: Service discovery and registration (Spring Boot).
- **ts-auth-service-1625**: Authentication service using JWT and refresh tokens (Node JS and Express JS).
- **ts-tms-service-1666**: Ticket management service using kafka and redis (Node JS and Express JS).
- **ts-notification-service-1677**: Service for handling email and SMS notifications.
- **Kafka**: Messaging broker used for real-time communications.
- More services and UIs coming soon !!!

## Running the Project

1. Clone the repository:

```bash
git clone https://github.com/tanmaysinghx/ts-shell-service-1001.git
cd ts-shell-service-1001

```

2. Install node modules for node.js and UI applications

```bash
npm install:all

```

3. Running the shell application using node.js command promt:

```bash
npm run start

```

4. Running the shell application using docker:

```bash
coming soon ....

```

## Notes:
 
- Setup using docker will be added soon
- Currently handling only node.js and UI applications will integrate a way to run spring application as well.