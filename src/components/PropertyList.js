import React from 'react';
import Property from './Property.js'

const PropertyList = ({items, visibleProperty}) => {
	const properties = (visibleProperty === '') ? items : items.filter((item) => item.name === visibleProperty)

	return (
		<div>
			{properties.map((object) => (<Property key={object.id} object={object} />))}
		</div>
	)
}

export default PropertyList