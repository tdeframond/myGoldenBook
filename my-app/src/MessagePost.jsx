import React, { Component } from 'react';

class MessagePost extends Component {
  	
	render() {
		return (
			<div className="message-post">
				<span> {this.props.guestSignature} </span> 
				<span> {this.props.message} </span>
				<button onClick={(event) => this.props.onDeleteClickHandler(this.props.id, event)}> X </button>
	        </div>
		)
	}
}

export default MessagePost;

