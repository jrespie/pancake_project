import React, { Component } from 'react';
import Butter from './Butter';
import Pancake from './Pancake';
import Plate from './Plate';
import './pancake.css';

let key = 0;

function getKey() {
	return key++;
}

class DynamicStackOfPancakes extends Component {
  constructor(props){
	  super(props)
	  this.state={
				  listOfPancakes: [<Pancake id={"pancake-"+key} key={getKey()} flavor="" />,<Pancake id={"pancake-"+key} key={getKey()} flavor=""/>,<Pancake id={"pancake-"+key} key={getKey()} flavor=""/>],
				  nextPancakeFlavor: "Plain"
				}
	  this.state.listOfPancakes.reverse();
	  this.addAPancake=this.addAPancake.bind(this);
  }

  addAPancake(){
	  const newPancakeStack=this.state.listOfPancakes;
	  const nextPancakeFlavor=document.getElementById("flavor").value;
	  newPancakeStack.unshift(<Pancake id={"pancake-"+key} key={getKey()} flavor={nextPancakeFlavor} />);
	  this.setState({ listOfPancakes: newPancakeStack });
  }

  render() {
	console.log(this.state.listOfPancakes);
    return (
		<div className="stack">
			<Butter />
			{this.state.listOfPancakes.map(x => x)}
			<Plate />
			<button onClick={this.addAPancake}>Add a pancake!</button>
			<div className="pancakeoptions">
				<span>What flavor?</span>
				<select id="flavor">
					<option value="">Plain</option>
					<option value="blueberry">Blueberry</option>
					<option value="chocchip">Chocolate Chip</option>
				</select><br/><br/>
				<span>Click on a pancake to make it go cold!</span><br/>
				<span>Click on it again to make it go hot again!</span>
			</div>
		</div>
	)
  }
}

export default DynamicStackOfPancakes;
