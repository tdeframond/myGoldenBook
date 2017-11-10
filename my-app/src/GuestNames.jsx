import React, { Component } from 'react';

class GuestNames extends Component {
  
	render() {
		return (
			<div className="jeanhubert">
				{this.props.messagesList}
	        </div>
		)
	}
}

export default GuestNames;

