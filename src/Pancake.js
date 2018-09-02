import React, { Component } from 'react';
import './pancake.css';

class Pancake extends Component {
	constructor(props){
		super(props);
		this.state={temperature: 'hot'}
	  }

  handleClick = () => {
	  if(this.state.temperature==='hot')
		  this.setState({temperature: 'cold'})
	  else
	  	  this.setState({temperature: 'hot'})
  }
  render() {
    return (
		<div className={"pancake "+this.props.flavor+" "+this.state.temperature} onClick={this.handleClick} id={this.props.id}>
	  </div>
    );
  }
}

export default Pancake;
