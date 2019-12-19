// // import React, { useState } from "react";
// import React, { Component } from "react";
// import {
// 	Label,
// 	Input,
// 	Button,
// 	Modal,
// 	ModalHeader,
// 	ModalBody,
// 	ModalFooter
// } from "reactstrap";

// class AddContact extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
//             modal: false,
//             edit:false,
// 			name: "",
// 			number: "",
//             email: "",
//             id:""
// 		};
// 	}
// 	toggle = () => {
// 		this.setState(prevState => ({
// 			modal: !prevState.modal
// 		}));
// 	};

// 	handleInput = e => {
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		});
// 	};

// 	resetState = () =>
// 		this.setState({
// 			name: "",
// 			number: "",
// 			email: ""
// 		});

// 	handleAdd = () => {
// 		if (
// 			this.state.name &&
// 			this.state.number &&
// 			this.state.email 
// 		) {
// 			// this.props.A(this.state.movie);
// 		} else {
// 			alert("No empty");
// 		}
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<Button onClick={this.toggle}>
// 					Add new Contact
// 				</Button>
// 				<Modal isOpen={this.state.modal} toggle={this.toggle}>
// 					<ModalHeader toggle={this.toggle}>Add a new Contact </ModalHeader>
// 					<ModalBody>
// 						<Label> Contact name :</Label>
// 						<Input
// 							name="title"
// 							className="input-form"
// 							placeholder="Enter contact name"
// 							onChange={this.handleInput}
// 							value={this.state.name}
// 						/>
// 						<Label> Contact Number :</Label>

// 						<Input
// 							name="number"
// 							className="input-form"
// 							placeholder="Enter your number"
// 							onChange={this.handleInput}
// 							value={this.state.number}
// 						/>
// 						<Label>Contact Email :</Label>
// 						<Input
// 							name="email"
// 							className="input-form"
// 							placeholder="Enter your email"
// 							onChange={this.handleInput}
// 							value={this.state.email}
// 						/>
// 					</ModalBody>
// 					<ModalFooter>
// 						<Button
// 							color="primary"
// 							onClick={() => {
// 								this.handleAdd();
								
// 								this.toggle();
// 								this.resetState();
// 							}}>
// 							Add
// 						</Button>
// 						<Button color="secondary" onClick={this.toggle}>
// 							Cancel
// 						</Button>
// 					</ModalFooter>
// 				</Modal>
// 			</div>
// 		);
// 	}
// }
// export default AddContact;
