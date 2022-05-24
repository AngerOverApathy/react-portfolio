import React, { useState } from 'react'
import Intro from './components/Intro/intro';
import About from './components/About/about'

import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState("intro");

  // const renderPage = () => {
	// 	switch (currentPage) {
  //     case "intro":
	// 			return <Intro />;
	// 		case "about":
	// 			return <About />;
	// 		case "portfolio":
	// 			return <Portfolio />;
	// 		default:
	// 			return null;
	// 	}
	// };

  return (
    <>
    <Intro />
    <About />
    </>
  );
}

export default App;
