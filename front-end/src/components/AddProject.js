import React from "react";
import axios from "axios";

export default class AddProject extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			completed: false,
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(`http://localhost:8000/api/projects`, this.state)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const { name, description } = this.state;

		return (
			<form onSubmit={this.handleSubmit} className=' form'>
				<label className='form-item'>
					Name
					<input className='form-input'
						type='text'
						name='name'
						value={name}
						onChange={this.handleChange}
					/>
				</label>
				<label className='form-item'>
					Description
					<input className='form-input'
						type='text'
						name='description'
						value={description}
						onChange={this.handleChange}
					/>
				</label>
				{/* <label>
					Status
					<input
						name='completed'
						value={completed}
						onChange={this.handleChange}
					/>
				</label> */}
				<button type='submit' className='btn'>
					Add
				</button>
			</form>
		);
	}
}
