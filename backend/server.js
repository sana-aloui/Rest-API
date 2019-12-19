const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());
// app.use(express.json());

const mongo_url = "mongodb://localhost:27017";
const dataBase = "ContactList";
MongoClient.connect(
	mongo_url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		if (!err) console.log("db connected");
		assert.equal(err, null, "error");
		const db = client.db(dataBase);

		app.post("/new_Contact", (req, res) => {
			let newContact = req.body;
			db.collection("contact").insertOne(newContact, (err, data) => {
				if (err) res.send("cant add contact");
				else res.send(data);
			});
		});

		app.get("/contacts", (req, res) => {
			db.collection("contact")
				.find()
				.toArray((err, data) => {
					if (err) res.send("cant fetch contacts");
					else res.send(data);
				});
		});

		app.put("/modify_contact/:id", (req, res) => {
			let id = ObjectID(req.params.id);
			let modifiedContact = req.body;
			db.collection("contact").findOneAndUpdate(
				{ _id: id },
				{ $set: { ...modifiedContact } },
				(err, data) => {
					if (err) res.send("cant modify contact");
					else res.send("contact was modified");
				}
			);
		});

		app.delete("/delete_contact/:id", (req, res) => {
			let contactToremove = ObjectID(req.params.id);
			db.collection("contact").findOneAndDelete(
				{ _id: contactToremove },
				(err, data) => {
					if (err) res.send("cant delete contact");
					else res.send("contact removed");
				}
			);
		});
	}
);

app.listen(5000, err => {
	if (err) console.log("server error");
	else console.log("server is running on port 5000");
});
