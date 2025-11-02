# CLAUDE.md

Take always into consideration the instructions in @AGENTS.md.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**observatoriospublicos.es** is a catalog of all public and public-private observatories in Spain. The project is a static website built with vanilla JavaScript (ES modules), HTML, and CSS, served with live-server during development.

## Development Commands

### Start Development Server

```bash
yarn serve
# or
npm run serve
```

This starts a live-server on the `httpdocs/` directory serving `index.html`.

### Docker Development (Alternative)

```bash
yarn docker:watch
```

Runs the development server in Docker, exposing port 8090.

### Code Formatting

The project uses **Prettier** with automatic formatting enforced via Husky pre-commit hooks.

- **Pre-commit hook**: Automatically formats files in `httpdocs/**/*.{js,json,css}` before each commit
- The hook uses Docker if available, falls back to Node.js/Prettier otherwise
- **Manual formatting**: Files are formatted automatically; you don't need to run Prettier manually
- **GitHub Actions**: A workflow automatically formats `observatories.json` on push to main or PRs

Prettier configuration (in `package.json`):

- No semicolons (`semi: false`)
- Single quotes (`singleQuote: true`)

## Architecture & Code Structure

### Frontend Architecture

This is a **client-side rendered single-page application** with no build step:

1. **Entry Point**: `httpdocs/index.html`
   - Loads PicoCSS from CDN
   - Custom stylesheets in `httpdocs/stylesheets/`
   - Main script: `httpdocs/modules/observatoriospublicos.js` (ES module)

2. **Data Source**: `httpdocs/observatories.json`
   - **THE SOURCE OF TRUTH**: Main catalog of all observatories
   - Array of observatory objects with properties: `name`, `description`, `parents`, `scope`, `type`, `website`, `docs`, `location`, `is_active`
   - `scope` values defined in `datasource.js` (estatal, municipal, regional autonomies)
   - `type` values: `publico` or `mixto` (público-privado)

3. **Module Structure**:
   - **`observatoriospublicos.js`**: Main application controller
     - Fetches `/observatories.json`
     - Validates scopes against `datasource.js`
     - Manages modal state for observatory details
     - Initializes search bar
     - Event handlers for modals and clicks

   - **`searchbar.js`**: Search/filter functionality
     - Tokenized search across `scope`, `name`, and `description`
     - Text normalization (NFD) for accent-insensitive search
     - Filters observatory list in real-time

   - **`observatorioContent.js`**: Component rendering
     - `createObservatoryCardComponent()`: Renders catalog cards
     - `createObservatoryDetailsComponent()`: Renders modal content

   - **`datasource.js`**: Data definitions
     - `types`: Observatory type definitions (público, público-privado)
     - `scopes`: Geographic scope definitions (all Spanish autonomous communities + municipal, estatal, provincial)

4. **Component System**:
   - Custom HTML elements: `<x-catalog>` (catalog container)
   - Modal system using `<dialog>` with PicoCSS styling
   - Cards are `<article>` elements with `data-target` and `data-observatory` attributes

### Key Design Patterns

- **No Framework**: Pure vanilla JavaScript with ES modules
- **Modal Management**: Single visible modal tracked in `visibleModal` variable
- **Immutable Data Flow**: Original observatory list is sliced for filtering
- **Event Delegation**: Click handlers attached to dynamically created elements
- **Normalization Strategy**: NFD normalization for search to handle Spanish accents

## Data Validation

On page load, `observatoriospublicos.js` validates:

1. All observatories have a `scope` value
2. All `scope` values exist in `datasource.js` scope definitions

Validation errors are collected but currently commented out (alert disabled).

## Adding New Observatories

New observatories are added via GitHub issues. To add one programmatically:

1. Add entry to `httpdocs/observatories.json`
2. Ensure `scope` matches a key in `datasource.js` scopes array
3. Ensure `type` is either `publico` or `mixto`
4. Required fields: `name`, `scope`, `type`
5. Optional fields: `description`, `parents`, `website`, `docs`, `location`, `is_active`
6. Prettier will auto-format on commit

## Requirements

- Node.js version 20 or higher (specified in Dockerfile and GitHub Actions)
- Yarn or npm for package management
- Docker (optional, for containerized development)

## Project Structure

```
httpdocs/               # Static web root
  ├── index.html        # Single-page application entry
  ├── observatories.json # Observatory catalog (main data)
  ├── modules/          # JavaScript ES modules
  │   ├── observatoriospublicos.js  # Main app controller
  │   ├── searchbar.js              # Search functionality
  │   └── observatorioContent.js    # Rendering components
  ├── datasource.js     # Type and scope definitions
  ├── stylesheets/      # Custom CSS
  ├── assets/           # Images, icons
  ├── components/       # (Minimal usage)
  └── fonts/            # Custom fonts

bin/
  └── serve.js          # Development server script

.husky/
  └── pre-commit        # Prettier auto-formatting hook
```

## Git Workflow

- Main branch: `main`
- Pre-commit hook runs Prettier on `httpdocs/**/*.{js,json,css}`
- GitHub Actions workflow formats `observatories.json` automatically on push
- Commits from auto-formatting: `chore: apply Prettier formatting`
