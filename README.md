# Interview AI Cohack

A modern Next.js application for AI-assisted interview experiences and evaluation workflows. This project provides a web interface for building, running, and managing interview-related features in a clean and scalable way.

## Features

- Modern React + Next.js frontend
- TypeScript support
- Tailwind-based UI styling
- Testing with Vitest
- Firebase integration
- Clean component architecture with reusable UI primitives

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js 18 or later
- npm 9 or later
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/cohack-team/interview_ai_cohack.git
   cd interview_ai_cohack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

> Note: If the app requires environment variables, create a `.env` or `.env.local` file in the project root and add the required values. Do not commit secrets or sensitive configuration files to the repository.

## Available Scripts

```bash
npm run dev       # start local development server
npm run build     # create production build
npm run start     # run production build locally
npm run lint      # run lint checks
npm run test      # run unit tests
npm run test:watch # run tests in watch mode
```

## Project Structure

```text
.
├── app/                 # Next.js app router pages and layouts
├── components/          # Reusable UI components
├── lib/                 # Utility functions and shared logic
├── public/              # Static assets
├── styles/              # Global styles and theme setup
├── tests/               # Test files
├── .env.example         # Example environment file (if present)
├── package.json         # Project scripts and dependencies
├── README.md            # Project documentation
└── next.config.*        # Next.js config files
```

## Development Guidelines

- Work on feature branches instead of directly committing to the main branch.
- Rebase your branch with the parent branch before opening a pull request.
- Test and validate your changes before pushing to production.
- Keep code quality high and avoid introducing unnecessary bugs.
- Maintain a clean `.gitignore` and never commit sensitive files such as `.env`, API keys, or authentication secrets.
- Raise an issue before starting significant changes and assign it appropriately.

## Contributing

1. Create a new branch for your work.
2. Make your changes and validate them locally.
3. Open a pull request after rebasing from the parent branch.
4. Ensure your work is reviewed and that any required checks pass.

## Support

If you run into setup or environment issues, check the project configuration and ensure all required dependencies and environment variables are set correctly.
