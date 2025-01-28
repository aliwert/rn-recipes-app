# Recipe App Server

A RESTful API server built with Express.js and MongoDB for managing recipes. This server provides authentication and CRUD operations for recipes.

> [!NOT] If you get the 'Debug Failure. False expression: Non-string value passed to ts.resolveTypeReferenceDirective' error, run this code in the terminal:

```bash
`npm i typescript@latest`
```

## Project Structure

src/
├── app.ts # Express app setup
├── controllers/ # Route controllers
├── middleware/ # Custom middleware
├── models/ # MongoDB models
└── routes/ # API routes

## Features

- User authentication with JWT
- CRUD operations for recipes
- MongoDB database integration
- TypeScript support
- Environment configuration
- Input validation
- Error handling

## Prerequisites

- Node.js (>= 12.0.0)
- MongoDB
- npm, pnpm or yarn

## Installation

1. Clone the repository

```bash
https://github.com/aliwert/rn-recipes-app.git
```

2. Navigate to the server directory:

```bash
cd server
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```env
JWT_SECRET=your_jwt_secret_key
PORT=5000
MONGODB_URI=<your_database_connection>
NODE_ENV=development
```

## Running the Server

- Development mode:

```bash
npm run dev
```

- Production mode:

```bash
npm run build
npm start
```
