import { Request, Response } from "express";
import Recipe from "../models/Recipe";

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

export const getRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe" });
  }
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: "Error creating recipe" });
  }
};

export const updateRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: "Error updating recipe" });
  }
};

export const deleteRecipe = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json(deletedRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe" });
  }
};
