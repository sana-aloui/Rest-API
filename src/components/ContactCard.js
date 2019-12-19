import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactCard extends Component {
	render() {
		const { contact, deleteContact, toggle } = this.props;
		return (
			<div className="card">
				<div>
					
					<h3><i className="fa fa-fw fa-user"></i>{contact.name}</h3>
					<p><i className="fa fa-fw fa-phone"></i>{contact.number}</p>
					<p><i className="fa fa-fw fa-envelope"></i>{contact.email}</p>

				</div>
				<div>
					<Link to={`/edit_contact/${contact._id}`}>
						<input
						className="button1"
							type="button"
							value="Edit"
							onClick={() => toggle(contact, true)}
						/>
					</Link>
					<input
					className="button1"
						type="button"
						value="Delete"
						onClick={() => deleteContact(contact._id)}
					/>
				</div>
			</div>
		);
	}
}

export default ContactCard;
