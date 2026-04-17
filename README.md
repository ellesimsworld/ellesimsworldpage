# ellesimsworld

A showcase site for Sims 4 mods by ellesimsworld.

## About

This is a static React site featuring:
- Mod catalog with images and descriptions
- Mod compatibility tracker
- Featured releases and downloads
- FAQ and help pages

## Tech Stack

- **React** with React Router
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Cloudflare Pages** for hosting

## Local Development

1. Clone the repository
2. Install dependencies:
```bash
   npm install
```
3. Run dev server:
```bash
   npm run dev
```
4. Open `http://localhost:5173`

## Project Structure
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # JSON data files (mods, tracker)
└── App.jsx         # Main app component
public/
└── images/         # Mod images and assets

## Updating Content

### Adding/Editing Mods
Edit `src/data/mods-cleaned.json` with mod details.

### Updating Mod Tracker
Edit `src/data/mod-tracker.json` with compatibility status.

### Adding Images
Place images in `public/images/` and reference as `/images/filename.png`

## Deployment

Automatically deploys to Cloudflare Pages on push to `main` branch.

Live site: [Your custom domain here]

## Build

```bash
npm run build
```

Outputs to `dist/` folder.