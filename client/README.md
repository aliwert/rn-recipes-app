# Recipe App Client

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Project Structure

```
client/
├── src/
│ ├── api/
│ │ └── index.ts # API endpoints
│ ├── components/
│ │ ├── common/ # Shared components
│ │ └── recipes/ # Recipe components
│ ├── context/
│ │ └── AuthContext.tsx # Auth context
│ ├── navigation/
│ │ └── AppNavigator.tsx # Navigation setup
│ ├── screens/
│ │ ├── auth/ # Auth screens
│ │ └── recipes/ # Recipe screens
│ ├── store/
│ │ └── index.ts # Redux store
│ ├── types/
│ │ └── index.ts # TypeScript types
│ └── utils/
│ └── index.ts # Utility functions
├── App.tsx # Root component
```

## Features

- User authentication (login/register)
- View recipes list
- Create new recipes
- Edit existing recipes
- Delete recipes
- Image upload support
- Offline storage

## Tech Stack

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- Axios
- AsyncStorage
- React Native Safe Area Context

## Environment Setup

- Create `.env` file:

```bash
API_URL=<your_backend_api_url>
```

## Development

```bash
# Start Metro bundler
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Prerequisites

```bash
# Required installations
node >= 14.0.0
npm >= 6.0.0
expo-cli
```

## Troubleshooting

Common issues and solutions:

1. Metro Bundler issues:

```bash
# Clear metro cache
npm start -- --reset-cache
```
