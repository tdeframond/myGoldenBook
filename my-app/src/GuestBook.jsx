import React, { Component } from 'react';
import { Button, Input, Table, Icon, Popup, Header } from 'semantic-ui-react';


const axios = require('axios');

class GuestBook extends Component {

	constructor(props) {
		super(props);

		this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
	    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);
		this.onAddClickHandler = this.onAddClickHandler.bind(this);
		this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
		this.handleMessageUpdate = this.handleMessageUpdate.bind(this);

	    this.state = {
	    	SignatureOfGuest: "",
	    	MessageofGuest: "",
	    	messages: [],
	    	messageUpdate:""
	    };
	}

	fetchingData() {
    	fetch('http://localhost:8080/api/signatures')
        .then(results => {
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

    handleMessageUpdate(event) {
      	this.setState({ messageUpdate: event.target.value });
    }
   
    onAddClickHandler(event) {
	    event.preventDefault();

	    if(this.state.SignatureOfGuest === '' || this.state.MessageofGuest === '') return;

	    this.setState({
			SignatureOfGuest: event.target.value,
			MessageofGuest: event.target.value,
		});

		axios.post('http://localhost:8080/api/signatures', {
	        SignatureOfGuest: this.state.SignatureOfGuest,
	        MessageofGuest: this.state.MessageofGuest,
	      })
	    .then(response => {
	      this.fetchingData();
	    })
	    .catch(err => {
	      console.log(err, 'Signature not added, try again');
	    });
	};

	onDeleteClickHandler(id, event) {
		axios.delete('http://localhost:8080/api/signatures/'+id)
	    .then(response => {
	      	this.fetchingData();
	    })
	    .catch(err => {
	      	console.log(err, 'Signature not deleted, try again');
	    });
	}

	onUpdateClickHandler(id, event) {
		event.preventDefault();
		axios.put('http://localhost:8080/api/signatures/'+id, {message: this.state.messageUpdate})
	    .then(response => {
	      	this.fetchingData();
    	    this.setState({messageUpdate: ""});
	    })
	    .catch(err => {
	      	console.log(err, 'Signature not updated, try again');
	    });
	}


	render() {
        var messagesList = [];        
        this.state.messages.forEach( (element) => {
          	messagesList.push(<Table.Row key={element._id}>
									<Table.Cell width="1">
								        <Icon name='user'/> <strong> {element.guestSignature} </strong>
								    </Table.Cell>
								    <Table.Cell width="5">
								        <div> {element.message} </div>
								    </Table.Cell>
								    <Table.Cell width="1">
								
								  	<Popup
								    	trigger={<Button size='mini'> Update </Button>}
								    	content={ <Input 
								    				autoFocus placeholder='New message...' 
								    				onChange={e => this.handleMessageUpdate(e)} 
								    				onKeyPress={ event => { if (event.key === 'Enter') {this.onUpdateClickHandler(element._id, event)}}
								    			} /> }
								    	on='click'
								    	position='top right'
								    	hideOnScroll
								  	/>
								        
							        <Button size='mini' basic color='red' value={this.state.messageUpdate} onClick={e => this.onDeleteClickHandler(element._id,e)}> Delete </Button>
								    </Table.Cell>        
						      	</Table.Row>);
        });

		return (
			<div className="guest-book-page-container">
				
				<Header as="h3" className="page-title"> Wassup fellows ? Leave me a message </Header>

				<div className="guest-book-form-container">
					<Input
			           onChange={this.handleSignatureOfGuest}
			           name="SignatureOfGuest"
			           className="NameinputForm"
			           value={this.state.SignatureOfGuest}

			           icon='user'
			           iconPosition='left'
			           placeholder='What is your name ?'
			        /> 
			 		<Input
						onChange={this.handleMessageofGuest}
						name="MessageofGuest"
						className="MessageinputForm"
						value={this.state.MessageofGuest}

						fluid
						icon="comment"
						iconPosition="left"
						placeholder="Your message"
					/>

					<Button
			            className="submitbuttonguestbook"
			            type="submit"
			            onClick={this.onAddClickHandler}

			            primary
			        >
			            Submit <i className="GuestBookButton2" aria-hidden="true" />
			        </Button>
		        </div>

		        <div className="guest-book-list-container">
			        <Table celled >
			        	    <Table.Header>
								<Table.Row>
									<Table.HeaderCell colSpan='3'>Messages of my Golden Book</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
			        			{messagesList}
			        		</Table.Body>
		        	</Table>
	        	</div>	
	        </div>
		)
	}
}

export default GuestBook;

