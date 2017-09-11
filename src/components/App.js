import React from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import Sidebar from './Sidebar.js'
import Properties from './Properties.js'

const isGroup = (object) => !!object.containing_object

const mapStateToProps = (state) => {
	return {
		visibleGroup: state.visibleGroup,
		visibleProperty: state.visibleProperty,
		groups: state.schema.filter(isGroup).concat({
			name: "general_info",
			containing_object: {
				properties: state.schema.filter((obj) => !isGroup(obj))
			}
		})
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		setVisibleGroup: (group) => dispatch({type: 'SET_VISIBLE_GROUP', group}),
		setVisibleProperty: (property) => dispatch({type: 'SET_VISIBLE_PROPERTY', property})
	}
}

const App = ({ visibleGroup, visibleProperty, groups, setVisibleGroup, setVisibleProperty }) => (
	  <div className="App">
		<Sidebar groups={groups} visibleGroup={visibleGroup} onItemClick={setVisibleGroup} onPropertyClick={setVisibleProperty} />
		<Properties groups={groups} visibleGroup={visibleGroup} visibleProperty={visibleProperty} />
	  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
