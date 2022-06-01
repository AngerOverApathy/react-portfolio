import React, { useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch,
} from 'react-router-dom';
import Intro from './components/Intro/intro';
import About from './components/About/about'
import Nav from './components/Nav/nav';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState("intro");

return (
    <>
	<Router>
		<Intro/>
		<Nav />
		<Routes>
			<Route path="about" element={<About />} />
			{/* <Route path="skills" element={}/> */}
			<Route path="skills" element={<Skills />} />
			<Route path="contact" element={<Contact />} />
		</Routes>
	</Router>
    </>
  );
}

export default App;
