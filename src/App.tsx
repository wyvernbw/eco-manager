<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/ui/Navbar/Navbar";
import ResourceCalendar from "./components/ui/Calendar/Calendar";
||||||| parent of 230210a ((wip) add usage component)
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/ui/Navbar/navbar";
=======
import './App.css';
import Navbar from './components/ui/Navbar/Navbar';
import Usage from './components/Usage';
>>>>>>> 230210a ((wip) add usage component)
||||||| parent of c392d1f (login page created)
import Navbar from "./components/ui/Navbar/navbar";
=======
import Navbar from "./components/ui/Navbar/Navbar";
>>>>>>> c392d1f (login page created)

function App() {
<<<<<<< HEAD
  return (
    <>
      <Navbar></Navbar>
      <ResourceCalendar></ResourceCalendar>
    </>
  );
||||||| parent of 230210a ((wip) add usage component)
  return (
    <>
      <Navbar></Navbar>
    </>
  );
=======
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
		</div>
	);
>>>>>>> 230210a ((wip) add usage component)
}

export default App;
