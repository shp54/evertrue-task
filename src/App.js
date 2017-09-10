import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropertyList from './ItemList.js'
import { decamelize } from './helpers.js'

const isGroup = (object) => !!object.containing_object

const mapStateToProps = (state) => {
	return {
		visibleGroup: state.visibleGroup,
		groups: state.schema.filter(isGroup),
		generalInfo: state.schema.filter((obj) => !isGroup(obj))  
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		setVisibleGroup: (group) => dispatch({type: 'SET_VISIBLE_GROUP', group})
	}
}

const App = ({ visibleGroup, groups, generalInfo, setVisibleGroup }) => {	
	const groupNames = groups.map((group) => group.name).concat("general_info")
	
    return (
      <div className="App">
			<div id="sidebar">
				{groupNames.map((name) => (<p data-name={name} onClick={() => setVisibleGroup(name)}>{decamelize(name)}</p>))}
			</div>
			<div id="properties">
			{ (visibleGroup !== 'general_info') ?
				 groups.map((group) => 
					(group.name === visibleGroup)
						? (<div>{decamelize(group.name)}: <PropertyList items={group.containing_object.properties} /></div>)
						: ""
					)
				: (<div>General Info: <PropertyList items={generalInfo} /></div>)
			}
			</div>
      </div>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
