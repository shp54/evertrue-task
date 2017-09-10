import React from 'react';
import Property from './Property.js'

const ItemList = ({items}) => (
		<div>
			{items.map((object) => (<Property key={object.id} object={object} />))}
		</div>
	)

export default ItemList