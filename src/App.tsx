import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import { Outlet } from '@tanstack/react-router';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}

export default App;
