# 🐱 Cat Lover - React Cat Gallery Application

**A React/TypeScript application for cat enthusiasts built with TheCatAPI**

> 🎮 **[Live Demo](#)** | 🔄 **Smart Caching** | 📊 **Analytics Dashboard** | 🔗 **Shareable URLs**

<div align="center">

<!-- Add your screenshots here -->

</div>

## ✅ Challenge Requirements Completed

| Requirement                   | Status | Implementation                                 |
| ----------------------------- | ------ | ---------------------------------------------- |
| **Random Cat Gallery**        | ✅     | 10 cats per load with infinite loading         |
| **Shareable Image Modals**    | ✅     | Copy-paste URLs that maintain image state      |
| **Breed Information Display** | ✅     | Full breed details with temperament and origin |
| **Breed List View**           | ✅     | Complete catalogue with images                 |
| **Favorites Management**      | ✅     | Add/remove favorites from gallery or modal     |

## 🎯 Extra Features (Beyond Requirements)

### Analytics Dashboard

A complete analytics view tracking user behavior:

- **Gallery Statistics**: Total cats loaded
- **Breed Views**: Most popular breeds viewed
- **Favorites Tracking**: Comparison between views and favorites
- **Visual Charts**: Bar charts and pie charts using Recharts

### Smart Breed Caching

Intelligent data management for optimal performance:

- **24-Hour Cache**: Breed data fetched once per day
- **Timestamp Validation**: Automatic cache invalidation after 24 hours
- **LocalStorage Integration**: Persistent cache across browser sessions
- **Efficient API Usage**: Minimizes unnecessary API calls

### Dual Favorite Actions

Users can favorite cats in two ways:

1. **From Gallery**: Quick-add button on each card
2. **From Modal**: Expanded favorite button with visual feedback

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mkourogiorgas/cat-lover.git

# Navigate to project directory
cd cat-lover

# Install dependencies
npm install

# Create .env file with your API key
echo "VITE_CAT_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
```

**Requirements:**

- Node.js 18+
- npm 9+
- TheCatAPI key (free at [thecatapi.com](https://thecatapi.com/))

## Technical Stack

| Technology        | Purpose              | Version |
| ----------------- | -------------------- | ------- |
| **React**         | UI Framework         | 19.2.0  |
| **TypeScript**    | Type Safety          | 5.9.3   |
| **Vite**          | Build Tool           | 7.2.2   |
| **Redux Toolkit** | State Management     | 2.10.1  |
| **React Router**  | Navigation & Routing | 7.9.5   |
| **Axios**         | HTTP Client          | 1.13.2  |
| **Recharts**      | Data Visualization   | 3.4.1   |
| **CSS Modules**   | Scoped Styling       | Native  |
| **Vitest**        | Testing Framework    | 4.0.8   |

## Architecture Highlights

### State Management Strategy

```
Redux Store
├── gallerySlice    → Random cat images (normalized by ID)
├── breedsSlice     → Breed catalog with timestamp metadata
├── favouritesSlice → User favorites (persisted to localStorage)
└── analyticsSlice  → User interaction tracking
```

### Smart Caching Logic

**Why This Matters:**

- ✅ Reduces API calls (breed data rarely changes)
- ✅ Faster load times (data served from localStorage)
- ✅ Better UX (instant navigation between views)

### Project Structure

```
src/
├── api/                  # API client and services
│   ├── api.ts           # Axios instance with interceptors
│   ├── services.ts      # API methods (fetchCats, fetchBreeds)
│   └── endpoints.ts     # API endpoint constants
├── components/          # Reusable UI components
│   ├── card/           # Cat card with image and favorite button
│   ├── modal/          # Image detail modal (shareable)
│   ├── breedModal/     # Breed detail modal with image grid
│   ├── navigation/     # Top navigation bar
│   └── ...
├── views/              # Page-level components
│   ├── gallery/        # Random cat images view
│   ├── breeds/         # Breed catalog view
│   ├── favourites/     # User favorites view
│   └── analytics/      # Analytics dashboard
├── store/              # Redux state management
│   ├── gallerySlice.ts
│   ├── breedsSlice.ts
│   ├── favouritesSlice.ts
│   └── analyticsSlice.ts
├── hooks/              # Custom React hooks
│   ├── useBreedsPersistence.ts
│   ├── useFavouritesPersistence.ts
│   └── useAnalyticsPersistence.ts
└── types.ts            # TypeScript type definitions
```

## Key Features in Detail

### 1. Shareable Modal URLs

Each cat image has a unique URL that can be shared:

```
/cat/j6oFGLpRG          → Opens modal in gallery view
/breeds/cat/j6oFGLpRG   → Opens modal in breeds view
/favourites/cat/j6oFGLpRG → Opens modal in favourites view
```

Uses React Router nested routes for clean URL structure.

### 2. Persistent Favorites

Favorites are saved to `localStorage` and restored on page load:

- Survives browser refresh
- Works offline
- Synced with Redux state

### 3. Analytics Tracking

Automatically tracks:

- Number of cats loaded in gallery
- Which breeds are viewed most often
- Favorite/view ratios

### 4. Optimistic UI Updates

Favorite button responds instantly without waiting for state updates, providing a smooth user experience.

## Development

```bash
# Run tests
npm run test

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

Unit tests cover:

- Redux slice reducers (gallery, breeds, favourites, analytics)
- Utility functions (mostly edge cases and error-prone utility functions)

```bash
# Run all tests
npm run test

```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Add `VITE_CAT_API_KEY` environment variable
4. Deploy

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

## API Usage

This application uses [TheCatAPI](https://thecatapi.com/):

- **Random Images**: `/v1/images/search`
- **Breeds List**: `/v1/breeds`
- **Image by ID**: `/v1/images/{id}`
- **Breed Images**: `/v1/images/search?breed_ids={id}`

## Project Decisions

### Why Redux Toolkit?

- Centralized state management for complex interactions
- Easy integration with localStorage persistence
- Excellent TypeScript support
- Built-in performance optimizations

### Why CSS Modules?

- Scoped styles prevent naming conflicts
- Better tree-shaking than global CSS
- Type-safe with TypeScript

### Why 24-Hour Cache?

- Breed data is static and rarely changes
- Reduces API load and costs
- Improves application responsiveness
- Balances freshness with performance

### Why Recharts?

- React-native charting library
- Responsive out of the box
- Simple API for common chart types
- Good TypeScript support

## License

This project is licensed under the MIT License.

## Acknowledgments

- [TheCatAPI](https://thecatapi.com/) for providing the cat data
- Challenge provided by GlobalWebIndex Engineering
