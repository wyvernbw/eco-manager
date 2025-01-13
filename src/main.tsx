<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of 3e289f0 (fix merge conflicts)
=======
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
>>>>>>> 3e289f0 (fix merge conflicts)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const queryClient = new QueryClient();
<<<<<<< HEAD
||||||| parent of a788144 (add tanstack router)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
=======
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
||||||| parent of 3e289f0 (fix merge conflicts)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
=======
>>>>>>> 3e289f0 (fix merge conflicts)

import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
>>>>>>> a788144 (add tanstack router)

createRoot(document.getElementById('root')!).render(
<<<<<<< HEAD
	<StrictMode>
<<<<<<< HEAD
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
||||||| parent of 3e289f0 (fix merge conflicts)
		<App />
=======
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</QueryClientProvider>
>>>>>>> 3e289f0 (fix merge conflicts)
	</StrictMode>
);
||||||| parent of a788144 (add tanstack router)
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
>>>>>>> a788144 (add tanstack router)
