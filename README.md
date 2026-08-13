# JBS Gym — React Landing Page

A React (JavaScript, Vite) recreation of the JBS Gym landing page: hero, services/features grid, "Build Your Strength" workflow section, pricing tiers, achievements + testimonials, and a contact/footer section with an embedded map.

## Run it in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal in the project folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## Build for production

```bash
npm run build
```
The optimized output goes to the `dist/` folder. Preview it locally with:
```bash
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx / Navbar.css
    Hero.jsx / Hero.css
    Features.jsx / Features.css
    BuildStrength.jsx / BuildStrength.css
    Pricing.jsx / Pricing.css
    Achievements.jsx / Achievements.css
    Contact.jsx / Contact.css
  App.jsx
  index.css        (global theme variables + base styles)
  main.jsx
index.html
```

## Notes

- All content (services, pricing, testimonials, contact info) lives at the top of each component file as plain JS arrays/objects — edit those to swap in your real copy.
- Hero and "Build Your Strength" images are placeholder stock photos from Unsplash; swap the `src` values in `Hero.jsx` / `BuildStrength.jsx` for your own gym photos.
- The map in the Contact section uses a generic embedded Google Maps iframe for "Bapatla, Andhra Pradesh" — replace the `src` URL with your actual location's embed link for a pinned marker.
- Fully responsive down to mobile, with a collapsible nav menu below 900px.
