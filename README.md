# Docker Node.js app with PostgreSQL

## Requirements

- Docker

Follow deployment instructions below.

## Development
Open the terminal and create the ``.env`` from the ``.env.dev``:
```
cp .env.dev .env
```

Build containers:
```
docker compose build
```

Run containers:
```
docker compose up -d
```

Visit the app at the http://127.0.0.1:8000

## Server registration with pgAdmin

Open pgAdmin in your browser: http://localhost:8080 and login with:

- Email Address: `dev@custom.com`
- Password: `G15cudczvtrlqTg7`

> You can change username, password and database name in [.env](.env).

Register a new server:

![pgAdmin Register Server](steps/step1.png)

Set the server name (General tab) and connection parameters (Connection tab):

![pgAdmin Register Server 2](steps/step2.png)

Database should be available in the left panel:

![pgAdmin Register Server 3](steps/step3.png)