import React, { Component } from 'react';
import './App.css';
import PropertyList from './ItemList.js'
import { decamelize } from './helpers.js'

const isGroup = (object) => !!object.containing_object

class App extends Component {
  render() {	
	const groups = this.props.schema.filter(isGroup)
	const generalInfo = this.props.schema.filter((obj) => !isGroup(obj))  

    return (
      <div className="App">
			{groups.map((group) => (
				<div>
					{decamelize(group.name)}: <PropertyList items={group.containing_object.properties} />
				</div>
			))}
			
			General Info: <PropertyList items={generalInfo} />
      </div>
    );
  }
}

export default App;
