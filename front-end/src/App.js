import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject"

function App() {

	return (
		<div className='App'>
			<h2>Web Sprint Challenge: Mini Projects</h2>
			<AddProject/>
			<Projects />
      		
		</div>
	);
}

export default App;
