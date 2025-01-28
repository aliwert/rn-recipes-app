'use strict';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipes';
import authRoutes from './routes/auth';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/recipes', recipeRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

app.use(require('./middleware/errorHandler'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
