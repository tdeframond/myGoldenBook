//====LIST DEPENDENCIES===//

const cors = require('cors');
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./model.js')
const url = 'mongodb://localhost:27017/signatures';



const app = express();
app.use(bodyParser.json());
app.use(cors()); 


//=========ENDPOINTS========//


//ROOT DIRECTORY

app.get('/', function(req, res) {
	res.json('you did it');
});

//GET SIGNATURES

app.get('/api/signatures', function(req, res) {
	Signature.find({}).then(eachOne => {
		res.json(eachOne);
	})
});

//EDIT SIGNATURES

//ADD
app.post('/api/signatures', function(req, res) {
	Signature.create({
		guestSignature: req.body.SignatureOfGuest,
		message: req.body.MessageofGuest,
	}).then(signature => {
		console.log("message registered");
		res.set();
		res.json(signature);
	});
})

//DEL
app.delete('/api/signatures/:id', function(req, res) {
	Signature.remove({
		_id: req.params.id
	}).then(signature => {
		console.log("message deleted");
		res.set();
		res.json(signature);
	});
})

//UPDATE
app.put('/api/signatures/:id', function(req, res) {
	Signature.findByIdAndUpdate(req.params.id, { $set: { message: req.body.message }}, { new: true }, function (err, tank) {
  		if (err) return handleError(err);
	  	res.send(tank);
	});
}); 




//====MONGOOSE CONNECT===//


mongoose.connect(url, {useMongoClient: true}, function (err, db) {
	if (err) {
   		console.log('Unable to connect to the mongoDB server. Error:', err);
 	} else {
   		console.log('Connection established to', url);
 	}
});


//=====START SERVER======//


app.listen(8080);

