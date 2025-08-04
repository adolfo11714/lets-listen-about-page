# Let's Listen About Page

A React application for the Let's Listen organization's about page.

## Features

- Modern React with TypeScript
- TailwindCSS for styling
- React Router for navigation
- Responsive design
- Accessibility features

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   ├── AboutInfo.tsx   # About information section
│   └── BoardMembers.tsx # Board members section
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   └── About.tsx       # About page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- TailwindCSS
- ESLint

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
