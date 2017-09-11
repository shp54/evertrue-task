import React from 'react';
import '../css/Sidebar.css'
import { fieldNameToString } from '../helpers.js'

const getPropsForGroup = (groups, visibleGroup) => groups.filter((group) => group.name === visibleGroup)[0].containing_object.properties.map((prop) => prop.name)

const Link = ({linkText, linkClass, clickHandler}) => (<p className={linkClass} key={linkText} onClick={() => clickHandler(linkText)}>{fieldNameToString(linkText)}</p>)

const Sidebar = ({visibleGroup, groups, onItemClick, onPropertyClick}) => (
	<div id="sidebar">
		{groups.map((group) => (
			<span>
			<Link linkClass='category' linkText={group.name} clickHandler={onItemClick} />
			{ (visibleGroup === group.name) ? getPropsForGroup(groups, visibleGroup).map((name) => (<Link linkClass='property-link' linkText={name} clickHandler={onPropertyClick} />)) : '' }
			</span>
		))}
	</div>
)

export default Sidebar;