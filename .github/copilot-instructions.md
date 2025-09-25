# Copilot Instructions for Lulu's Chinese Kitchen Website

## Project Overview
This is a React + Vite + TypeScript project for Lulu's Chinese Kitchen website (lulu-k.com). The website should be an exact replica of the original site with dynamic menu loading from CSV data.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with RTL (right-to-left) support for Hebrew
- **Routing**: React Router DOM
- **Internationalization**: react-i18next
- **State Management**: Zustand
- **Data Parsing**: PapaParse for CSV menu data
- **Form Validation**: Zod
- **SEO**: React Helmet Async
- **PWA**: Vite PWA plugin

## Key Requirements

### Design & Content
- **EXACT REPLICA**: The website must be a pixel-perfect 1:1 copy of lulu-k.com
- **RTL Support**: Hebrew text with right-to-left layout (`dir="rtl"` in HTML)
- **Color Scheme**: 
  - Primary: `#DC143C` (chinese-red)
  - Gold: `#FFD700` (chinese-gold)
  - Dark Red: `#8B0000` (chinese-darkRed)
  - Black: `#1A1A1A` (chinese-black)
  - Light Gold: `#FFF8DC` (chinese-lightGold)
- **Font**: Noto Sans Hebrew for Hebrew text
- **Do NOT invent content**: Only use content from the original site

### Dynamic Menu System
- Menu items loaded from CSV: `https://docs.google.com/spreadsheets/d/e/2PACX-1vRFmGECEXCaaH6uXJ_lDHO7g1GaIwh-aHTy9P_EVoTYWxROaBOa_XPJ4H3OOe4h4NwlU93Lg-_au-2B/pub?gid=1874715002&single=true&output=csv`
- CSV contains: categories, prices, tags, dish names, images
- Only display items that exist in the CSV
- Remove items not in CSV

### Environment Variables
```bash
VITE_SHEETS_CSV_URL=<CSV_URL>
VITE_MENU_JSON_URL=<JSON_API_URL>
VITE_IMAGES_BASE=https://lulu-k.com/images
VITE_FORM_ENDPOINT=<APPS_SCRIPT_ENDPOINT>
VITE_ORDER_ENDPOINT=<ORDER_ENDPOINT>
VITE_REVIEW_ENDPOINT=<REVIEW_ENDPOINT>
VITE_CURRENCY=₪
VITE_DELIVERY_FEE=20
```

## Development Guidelines

### File Structure
```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── i18n.ts          # Internationalization setup
├── main.tsx         # Application entry point
└── App.tsx          # Root component
```

### Coding Standards
1. **TypeScript**: Use strict TypeScript with proper type definitions
2. **Components**: Functional components with TypeScript interfaces
3. **Hooks**: Custom hooks for data fetching and state management
4. **Error Handling**: Proper error boundaries and loading states
5. **Accessibility**: WCAG compliant components
6. **SEO**: Use React Helmet for meta tags and structured data

### Common Patterns
- Use `useTranslation` hook for internationalized text
- Use Zustand for global state (cart, user preferences)
- Use React Router for navigation
- Use Tailwind classes with RTL considerations
- Use PapaParse for CSV data processing
- Use Zod for form validation

### API Integration
- Forms submit to Google Apps Script endpoints
- Menu data fetched from Google Sheets CSV
- Images served from `https://lulu-k.com/images/`
- Handle loading states and errors gracefully

## Important Notes
- **Content Accuracy**: Never create Hebrew text or menu items - only use existing content
- **RTL Layout**: Always consider right-to-left text flow
- **Performance**: Optimize images and lazy load components
- **Mobile First**: Responsive design with mobile-first approach
- **SEO**: Include proper meta tags, structured data, and sitemap
- **PWA**: Service worker for offline capability

## Common Issues to Avoid
- Mixing LTR and RTL text directions
- Hardcoding menu items instead of using CSV data
- Missing TypeScript types for environment variables
- Not handling CSV parsing errors
- Forgetting to optimize images
- Missing Hebrew font loading

## Testing Approach
- Test with both Hebrew and English content
- Verify CSV data loading and parsing
- Test form submissions to Apps Script
- Check responsive design on various devices
- Validate SEO meta tags and structured data

When working on this project, always prioritize accuracy to the original website and proper handling of Hebrew RTL layout.