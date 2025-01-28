'use strict';

import mongoose, { Document } from 'mongoose';

export interface IRecipe extends Document {
  title: string;
  ingredients: string[];
  instructions: string;
  cookingTime: number;
  imageUrl: string;
  createdAt: Date;
}

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  cookingTime: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);
