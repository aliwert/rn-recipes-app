'use strict';

import { Router } from 'express';
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../controllers/recipeController';

const router = Router();

router.get('/', getRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;
