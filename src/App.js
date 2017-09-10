import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropertyList from './ItemList.js'
import { decamelize } from './helpers.js'

const isGroup = (object) => !!object.containing_object

const App = ({ schema, dispatch }) => {	
	const groups = schema.filter(isGroup)
	const groupNames = groups.map((group) => group.name).concat("general_info")
	const generalInfo = schema.filter((obj) => !isGroup(obj))  

    return (
      <div className="App">
			<div id="sidebar">
				{groupNames.map((name) => (<p data-name={name}>{decamelize(name)}</p>))}
			</div>
			<div id="properties">
				{groups.map((group) => (
					<div>
						{decamelize(group.name)}: <PropertyList items={group.containing_object.properties} />
					</div>
				))}
				General Info: <PropertyList items={generalInfo} />
			</div>
      </div>
    );
  }

export default connect((state) => state)(App);
