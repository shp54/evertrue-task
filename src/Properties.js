import React from 'react';
import PropertyList from './ItemList.js'
import { decamelize } from './helpers.js'

const Properties = ({groups, visibleGroup, visibleProperty}) => (
	<div id="properties">
		{groups.map((group) => 
			(group.name === visibleGroup)
				? (<div>
					<h1>{decamelize(group.name)}</h1>
					<PropertyList items={group.containing_object.properties} visibleProperty={visibleProperty} />
				   </div>)
				: ""
		)}
	</div>
)

export default Properties;