# Chonlatree Ketkorwoing Portfolio

Personal portfolio website built with React, Vite, React Router, and Tailwind CSS v4.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Client-side navigation with React Router
- Home page with game development projects
- Profile and education pages
- Portfolio page with testing experience
- Login page with password visibility toggle
- Fuel calculator page
- Reusable navigation and contact footer components
- Stable `data-testid` attributes for UI testing

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS v4
- Oxlint

## Getting Started

Requirements:

- Node.js 18 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal, normally `http://localhost:5173/`.

## API Configuration

API settings are stored in the `config/` folder:

- `config/.env.ts` contains the local API base URL.
- `config/.endpoint.ts` contains the API endpoint paths.

The API service sends a `POST` request to:

```text
${VITE_API_URL}${VITE_LOGIN_ENDPOINT}
```

The default local values are `http://localhost:3000/api` and `/login`. The `.env` file is ignored by Git because it may contain environment-specific or sensitive values.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/profile` | Profile |
| `/portfolio` | Portfolio and testing experience |
| `/education` | Educational record |
| `/login` | Login form |
| `/fuel` | Fuel calculator |

The Fuel Calculator route is available directly at `/fuel`, although it is currently hidden from the main navigation menu.

## Project Structure

```text
src/
├── components/       Shared UI components
├── data/              Navigation and static data
├── layouts/           Shared page layouts
├── pages/             Routed page components
├── routes/            React Router configuration
├── App.css            Tailwind component styles
├── App.jsx            Application entry and router provider
├── index.css          Global Tailwind theme and base styles
└── main.jsx           React DOM entry point

Photo/icon/            Portfolio images and social icons
index.html             Vite HTML entry point
vite.config.js         Vite and Tailwind configuration
```

## Production Preview

Build and preview the production version locally:

```bash
npm run build
npm run preview
```

## Deployment

The repository includes `deploy.bat` for the existing Git-based deployment workflow. Review the target branch and remote before running it.
