# Recipe App

This is a Recipe App built with React Native for the client-side and Express with MongoDB for the backend. 

## Project Structure

The project is divided into two main directories: `client` and `server`.

### Client

- **`client/src/App.tsx`**: Main entry point for the React Native application.
- **`client/src/components/Header.tsx`**: Displays the title of the app and navigation options.
- **`client/src/components/RecipeCard.tsx`**: Displays individual recipe details.
- **`client/src/screens/HomeScreen.tsx`**: Lists recipes using the `RecipeCard` component.
- **`client/src/screens/RecipeDetailScreen.tsx`**: Shows detailed information about a selected recipe.
- **`client/src/screens/AddRecipeScreen.tsx`**: Provides a form for users to add new recipes.
- **`client/src/navigation/index.tsx`**: Sets up the navigation structure for the app.
- **`client/src/types/index.ts`**: Exports TypeScript types and interfaces used in the client application.
- **`client/package.json`**: Configuration file for npm in the client directory.
- **`client/tsconfig.json`**: TypeScript configuration file for the client.

### Server

- **`server/src/app.ts`**: Main entry point for the Express server.
- **`server/src/models/Recipe.ts`**: Mongoose model defining the schema for recipe documents.
- **`server/src/routes/recipes.ts`**: Routes for handling recipe-related API requests.
- **`server/src/controllers/recipeController.ts`**: Functions that handle the logic for the recipe routes.
- **`server/src/config/db.ts`**: Connects to the MongoDB database using Mongoose.
- **`server/package.json`**: Configuration file for npm in the server directory.
- **`server/tsconfig.json`**: TypeScript configuration file for the server.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd recipe-app
   ```

2. **Install dependencies**:
   - For the client:
     ```bash
     cd client
     npm install
     ```
   - For the server:
     ```bash
     cd server
     npm install
     ```

3. **Run the server**:
   ```bash
   cd server
   npm start
   ```

4. **Run the client**:
   ```bash
   cd client
   npm start
   ```

## Usage

- Access the client application on your mobile device or emulator.
- Use the app to view, add, and manage recipes.