import React from 'react';
import PropertyList from './ItemList.js'
import { decamelize } from './helpers.js'

const Properties = ({groups, visibleGroup, generalInfo}) => (
	<div id="properties">
		{ (visibleGroup !== 'general_info') ?
			 groups.map((group) => 
				(group.name === visibleGroup)
					? (<div>
						<h1>{decamelize(group.name)}</h1>
						<PropertyList items={group.containing_object.properties} />
					   </div>)
					: ""
				)
			: (<div>General Info: <PropertyList items={generalInfo} /></div>)
		}
	</div>
)

export default Properties;