import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject"

function App() {

  // Axios.post("http://localhost:4000/api/projects", {projec})
	return (
		<div className='App'>
			<h2>Web Sprint Challenge</h2>
			<Projects />
      <AddProject/>
		</div>
	);
}

export default App;
