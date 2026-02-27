# Todo App

An example TODO app for testing the [Ralfus agent](https://github.com/rocketedaway/ralfus).

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [Docker](https://www.docker.com/) (optional)

## Setup

```bash
npm install
```

## Running

Start the server:

```bash
npm start
```

Start with hot reloading (development):

```bash
npm run dev
```

The server listens on **http://localhost:3002**.

## Testing

```bash
npm test
```

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

Source files are bind-mounted into the container, so changes to `src/` will automatically restart the server via `nodemon`.
