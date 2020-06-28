import React from "react";

const Project = (props) => {
	// console.log(props.project.name);
	return (
		<div>
			<h4>
				{props.project.name} - {props.project.description}
			</h4>
		</div>
	);
};

export default Project;
