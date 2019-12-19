import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import ContactCard from "./ContactCard";
import AddContact from "../components/AddContact";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			number: "",
			email: "",
			contactList: [],
			id: "",
			edit: false
		};
	}

	componentDidMount = () => {
		this.getUsers();
	};

	getUsers = () => {
		axios.get("/contacts").then(res =>
			this.setState({
				contactList: res.data
			})
		);
	};
	newContact = () => {
		axios
			.post("/new_Contact", {
				name: this.state.name,
				number: this.state.number,
				email: this.state.email
			})
			.then(this.getUsers)
			.then(this.addOne());
	};

	editContact = () => {
		axios
			.put(`/modify_contact/${this.state.id}`, {
				name: this.state.name,
				number: this.state.number,
				email: this.state.email
			})
			.then(this.getUsers);
		// this.addOne();
	};

	deleteContact = id => {
		axios.delete(`/delete_contact/${id}`).then(this.getUsers);
	};
	toggle = (contact, edit) => {
		this.setState({
			id: contact._id,
			name: contact.name,
			number: contact.number,
			email: contact.email,
			edit
		});
	};
	addOne = () => {
		this.setState({
			edit: false,
			name: "",
			number: "",
			email: ""
		});
	};
	handleInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// resetState = () =>
	// 	this.setState({
	// 		name: "",
	// 		number: "",
	// 		email: ""
	// 	});

	render() {
		// console.log("this.props", this.props);
		return (
			<div>
				<div className="list">
					<h1>Contact List</h1>
					<div className="boutons-add">
						<Link to="/contact-list">
							<button className="button" onClick={this.addOne}>
								Contact List
							</button>
						</Link>
						<Link to="/new-contact">
							<button
								className="button"
								onClick={
									this.addOne
									// this.setState({ edit: true });
									// this.resetState();
								}>
								Add Contact
							</button>
						</Link>
					</div>
				</div>
				<Route
					path="/contact-list"
					render={() => (
						<div className="contactCard">
							{this.state.contactList.map(el => (
								<ContactCard
									contact={el}
									// edit={this.state.edit}
									toggle={this.toggle}
									// editContact={this.editContact}
									deleteContact={this.deleteContact}
								/>
							))}
						</div>
					)}
				/>
				<Route
					path={!this.state.edit ? "/new-contact" : "/edit_contact/:id"}
					render={() => (
						<AddContact
							contact={this.state}
							handleInput={this.handleInput}
							handleAdd={this.state.edit ? this.editContact : this.newContact}
							edit={this.state.edit}
						/>
					)}
				/>
			</div>
		);
	}
}

export default List;
