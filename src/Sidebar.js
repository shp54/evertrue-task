import React from 'react';
import { decamelize } from './helpers.js'

const getPropsForGroup = (groups, visibleGroup) => groups.filter((group) => group.name === visibleGroup)[0].containing_object.properties.map((prop) => prop.name)

const Sidebar = ({visibleGroup, groups, onItemClick, onPropertyClick}) => (
	<div id="sidebar">
		{groups.map((group) => (
			<span>
			<p className='category' key={group.name} onClick={() => onItemClick(group.name)}>{decamelize(group.name)}</p>
			{ (visibleGroup === group.name) ? getPropsForGroup(groups, visibleGroup).map((name) => (
				<p onClick={() => onPropertyClick(name) }>{decamelize(name)}</p>)
			) : '' }
			</span>
		))}
	</div>
)

export default Sidebar;