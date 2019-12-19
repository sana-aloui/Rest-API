import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AddContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		};
	}

	render() {
		console.log("cont", this.props.contact);
		return this.state.redirect ? (
			<Redirect to="/contact-list" />
		) : (
			<div className ="add">
				<div className="form-group row">
					<div className="col-md-3">
						<input
							className="form-control"
							name="name"
							type="text"
							placeholder="Enter a name"
							onChange={this.props.handleInput}
							value={this.props.contact.name}
						/>
					</div>
					<div className="col-md-3">
						<input
							className="form-control"
							name="number"
							type="text"
							placeholder="Enter a number"
							onChange={this.props.handleInput}
							value={this.props.contact.number}
						/>
					</div>
					<div className="col-md-3">
						<input
							className="form-control"
							name="email"
							type="text"
							placeholder="Enter an Email"
							onChange={this.props.handleInput}
							value={this.props.contact.email}
						/>
					</div>
					<input
						type="button"
						value={this.props.edit ? "Edit contact" : "Add Contact"}
						onClick={() => {
							this.props.handleAdd();
							// this.props.resetState()
							this.setState({ redirect: true });
						}}
					/>
				</div>
			</div>
		);
	}
}
export default AddContact;
