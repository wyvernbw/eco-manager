import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import Usage from './components/Usage';

function App() {
	return (
		<div className="flex flex-col h-screen w-screen">
			<header>
				<Navbar />
			</header>
			<main className="flex flex-col p-4 gap-4 mt-16">
				<Usage type="heating" />
				<Usage type="water" />
				<Usage type="electricity" />
			</main>
		</div>
	);
}

export default App;
