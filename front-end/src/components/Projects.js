import React from "react";
import axios from "axios";
import Project from "./Project"

export default class Projects extends React.Component {
	state = {
		projects: [],
	};

	componentDidMount() {
		axios.get("http://localhost:4000/api/projects").then((res) => {
            console.log(res.data)
			const projects = res.data;
			this.setState({ projects });
		});
	}

	render() {
		return (
			<ul className="list">
				{this.state.projects.map((project) => (
					<li className="list-items" key={project.id}><Project project={project}/></li>
				))}
			</ul>
		);
	}
}
