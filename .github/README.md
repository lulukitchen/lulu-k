# Development Environment Setup

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

## Installation
```bash
npm install --legacy-peer-deps
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests with Vitest

## Environment Setup
1. Copy `.env.example` to `.env`
2. Fill in the required environment variables
3. Ensure CSV URL points to the Google Sheets export

## Key Dependencies
- React 18.3.1 with TypeScript
- Vite 5.4.9 for build tooling
- Tailwind CSS 3.4.14 for styling
- React Router DOM 6.26.2 for routing
- React i18next 15.0.2 for internationalization
- Zustand 4.5.6 for state management
- PapaParse 5.4.1 for CSV parsing
- Zod 3.23.8 for validation

## Project Structure
```
/
├── .github/                 # GitHub specific files
│   └── copilot-instructions.md
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # React components
│   ├── pages/              # Page components  
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utility functions
│   └── i18n.ts             # i18n configuration
├── index.html              # Entry HTML
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Important Notes
- This project requires Hebrew (RTL) text support
- All content must match the original lulu-k.com website exactly
- Menu items are loaded dynamically from Google Sheets CSV
- Forms submit to Google Apps Script endpoints