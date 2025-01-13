import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import Usage from './components/Usage';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import { Outlet } from '@tanstack/react-router';

function App() {
	return (
		<div className="flex flex-col h-screen w-screen">
			<header>
				<Navbar />
			</header>
			<main className="flex flex-col p-4 gap-4 mt-16">
				<Usage type="heat" />
				<Usage type="water" />
				<Usage type="electricity" />
			</main>
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
}

export default App;
