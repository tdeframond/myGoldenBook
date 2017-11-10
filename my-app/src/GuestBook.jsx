import React, { Component } from 'react';
import GuestNames from './GuestNames.jsx';
import MessagePost from './MessagePost.jsx';

const axios = require('axios');

class GuestBook extends Component {

	constructor(props) {
		super(props);

		this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
	    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
		this.onAddClickHandler = this.onAddClickHandler.bind(this);
		this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);

	    this.state = {
	    	SignatureOfGuest: "",
	    	MessageofGuest: "",
	    	messages: []
	    };
	}

	fetchingData() {
    	fetch('http://localhost:8080/api/signatures')
        .then(results => {
        	console.log('fetch succsessful')
        	return results.json();
      	})
      	.then(messages => this.setState({messages: messages}));
    }

	componentDidMount() {
		this.fetchingData();
	}

    handleSignatureOfGuest(event) {
    	this.setState({ SignatureOfGuest: event.target.value });
  	}

  	handleMessageofGuest(event) {
      	this.setState({ MessageofGuest: event.target.value });
    }

    onAddClickHandler(event) {
	    event.preventDefault();
	    this.setState({
			SignatureOfGuest: event.target.value,
			MessageofGuest: event.target.value,
		});

		axios.post('http://localhost:8080/api/signatures', {
	        SignatureOfGuest: this.state.SignatureOfGuest,
	        MessageofGuest: this.state.MessageofGuest,
	      })
	    .then(response => {
	      console.log(response, 'Signature added!');
	      this.fetchingData();
	    })
	    .catch(err => {
	      console.log(err, 'Signature not added, try again');
	    });

	};

	onDeleteClickHandler(id, event) {
		console.log('id' + id);
		axios.delete('http://localhost:8080/api/signatures/'+id)
	    .then(response => {
	        console.log(response, 'Signature deleted!');
	      	this.fetchingData();
	    })
	    .catch(err => {
	      	console.log(err, 'Signature not deleted, try again');
	    });
	}

	render() {

        var messagesList = [];        
        this.state.messages.forEach( (element) => {
          	messagesList.push(<MessagePost key={element._id} id={element._id} guestSignature={element.guestSignature} message={element.message} onDeleteClickHandler={this.onDeleteClickHandler}/>);
        });
        console.log(messagesList);

		return (
			<div>
				<input
		           onChange={this.handleSignatureOfGuest}
		           name="SignatureOfGuest"
		           className="NameinputForm"
		           value={this.state.SignatureOfGuest}
		           placeholder="Enter your name"
		        />
		 		<textarea
					onChange={this.handleMessageofGuest}
					name="MessageofGuest"
					className="MessageinputForm"
					value={this.state.MessageofGuest}
					placeholder="Type a message"
				/>

				<button
		            className="submitbuttonguestbook"
		            type="submit"
		            onClick={this.onAddClickHandler}
		        >
		            Submit to iegnidurngq <i className="GuestBookButton2" aria-hidden="true" />
		        </button>
		        <GuestNames messagesList={messagesList}/>
	        </div>
		)
	}
}

export default GuestBook;

