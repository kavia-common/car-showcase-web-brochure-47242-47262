# Ocean Motors – Interactive Car Brochure (React)

A responsive, interactive brochure for exploring car models, specs, media, and customization.

## Highlights

- Ocean Professional theme (blue/amber accents, subtle shadows, rounded corners)
- Pages/Routes: Home (/), Models (/models), Compare (/compare)
- Components: Navbar (sticky), Hero (gradient overlay), Gallery (snap carousel), SpecsPanel (compare support), Customizer (colors/trims/wheels), Footer
- Mock data for 3 models; last selected model persisted in localStorage
- Accessibility: alt text, focusable controls, keyboard-friendly carousel
- Performance: lazy images, responsive `srcSet`, code-splitting ready structure
- API placeholder reading `REACT_APP_API_BASE` for future integration

## Getting Started

- `npm start` – Development server (http://localhost:3000)
- `npm run build` – Production build
- `npm test` – Tests (basic example included)

## Theme

Theme tokens are defined in:
- `src/App.css` (CSS variables and utilities)
- `src/theme/theme.js` (exported color palette and gradient)
- `src/theme/ThemeContext.js` (provider for theme mode toggling)

Key colors:
- primary: `#2563EB`
- secondary/success: `#F59E0B`
- error: `#EF4444`
- background: `#f9fafb`
- surface: `#ffffff`
- text: `#111827`

## Structure

- `src/pages/Home.js` – Hero, gallery, specs, customizer
- `src/pages/Models.js` – Card list with model selection
- `src/pages/Compare.js` – Side-by-side selector and specs
- `src/components/*` – Individual UI components
- `src/data/models.js` – Mock dataset
- `src/state/AppContext.js` – Selection state with persistence
- `src/api/client.js` – API placeholder (safe if env is not set)

## Environment

Optional variables:
- `REACT_APP_API_BASE` – Base URL for future API calls
- Other REACT_APP_* vars are accepted but not required.

The app does not require a backend to run.

## Future Integration

- Replace `src/api/client.js` logic to use real endpoints under `REACT_APP_API_BASE`.
- Extend `AppContext` with fetched data or caching as needed.

