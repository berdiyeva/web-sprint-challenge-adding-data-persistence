import React from "react";
import axios from "axios";

export default class AddProject extends React.Component {
	state = {
		name: "",
		description: "",
		dompleted: true,
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const project = {
			name: this.state.name,
			decsription: this.state.decsription,
			copmleted: this.state.completed,
		};

		axios
			.post(`http://localhost:4000/api/projects`, { project })
			.then((res) => {
				console.log(res);
			});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>
				<label>
					Project name
					<input
						type='text'
						name='name'
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Project description
					<input
						type='text'
						name='description'
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Completed
					<input
						name='completed'
						value={this.state.completed}
						onChange={this.handleChange}
					/>
				</label>
				<button type='submit'>Add</button>
			</form>
		);
	}
}
