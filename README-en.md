# NestJS Prisma MongoDB Application

This project is a backend API built with NestJS and Prisma, designed to interact with a MongoDB database. It provides RESTful endpoints for managing `Assets` and `Orders`.

## Features

- **API Versioning:** All routes are prefixed with `api/v1`.
- **Prisma ORM:** Simplified interaction with the MongoDB database.
- **Modular Architecture:** Clean separation of concerns with NestJS modules.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v18 or later
- **Docker**: For running MongoDB

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure the Environment

Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL=mongodb://mongo:27017/nest
```

### 4. Start MongoDB with Docker

Use the provided `docker-compose.yml` file to run MongoDB:

```bash
docker-compose up -d
```

### 5. Generate Prisma Client

Run the following command to generate the Prisma client:

```bash
npx prisma generate
```

### 6. Start the Server

Run the application:

```bash
npm run start
```

The API will be available at `http://localhost:3000/api/v1`.

## Endpoints

### Assets

#### Create Asset
- **POST** `/api/v1/assets`

**Request Body:**
```json
{
  "symbol": "AAPL"
}
```

#### Get All Assets
- **GET** `/api/v1/assets`

### Orders

#### Create Order
- **POST** `/api/v1/orders`

**Request Body:**
```json
{
  "assetId": "<valid_object_id>",
  "price": 150.0
}
```

#### Get All Orders
- **GET** `/api/v1/orders`

## Project Structure

- **src/app.module.ts**: Main application module.
- **src/assets/**: Module for managing assets.
- **src/orders/**: Module for managing orders.
- **src/prisma/**: Prisma service integration.

## Development Notes

- **Global Prefix:** All routes are prefixed with `api/v1`.
- **Prisma Client:** Ensure the Prisma client is regenerated after any changes to `schema.prisma`.
- **Dockerized