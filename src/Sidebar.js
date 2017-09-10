import React from 'react';
import { connect } from 'react-redux';
import { decamelize } from './helpers.js'

const getPropsForGroup = (groups, visibleGroup) => groups.filter((group) => group.name === visibleGroup)[0].containing_object.properties.map((prop) => decamelize(prop.name))

const Sidebar = ({visibleGroup, groups, onItemClick}) => {
	const groupNames = groups.map((group) => group.name).concat("general_info")
	
	return (
		<div id="sidebar">
			{groupNames.map((name) => (
				<span>
				<p className='category' data-name={name} onClick={() => onItemClick(name)}>{decamelize(name)}</p>
				{ (visibleGroup === name) ? getPropsForGroup(groups, visibleGroup).map((name) => (<p>{name}</p>)) : '' }
				</span>
			))}
		</div>
	)

}

export default Sidebar;