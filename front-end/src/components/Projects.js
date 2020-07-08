import React from "react";
import axios from "axios";
import Project from "./Project"


export default class Projects extends React.Component {
	state = {
		projects: [],
	};

	getProjects = () => {
		axios.get("http://localhost:8000/api/projects").then((res) => {
            console.log(res.data)
			const projects = res.data;
			this.setState({ projects });
		});
	}


	componentDidMount() {
		this.getProjects()
	}

	// componentDidUpdate() {
	// 	this.getProjects()
	// }


	 handleDelete = (id) => {
	axios.delete(`http://localhost:8000/api/projects/${id}`)
		.then((res) => {
			console.log("Item was deleted", res);
			// this.setProjects(this.projects.filter((item) => item.id !== id));
		  })
		  .catch((error) => {
			console.log(error)})
	}

	// handleUpdate = id => {
	// 	axios.put(`http://localhost:8000/api/projects${id}`, newProject)
	// 	.then(res => )
	// }

	render() {
		return (
			<ul className="container">
				{this.state.projects.map((project) => (
					<li className="box" key={project.id}><Project project={project}/><button onClick={()=>this.handleDelete(project.id)}>X</button></li>
				))}
			</ul>
		);
	}
}
