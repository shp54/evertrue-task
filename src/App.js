import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar.js'
import Properties from './Properties.js'

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
    return (
      <div className="App">
			<div id="sidebar">
				<Sidebar groups={groups} visibleGroup={visibleGroup} onItemClick={setVisibleGroup} />
				<Properties groups={groups} visibleGroup={visibleGroup} generalInfo={generalInfo} />
			</div>
      </div>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
