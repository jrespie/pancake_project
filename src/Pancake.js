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
	const myFlavor="pancake "+this.props.flavor+" "+this.state.temperature
    return (
		<div className={myFlavor} onClick={this.handleClick}>
	  </div>
    );
  }
}

export default Pancake;
