import React from 'react';
import '../css/Properties.css'
import { capitalize, fieldNameToString } from '../helpers.js'

const formatAppList = (appList) => appList.join(", ")

const Property = ({ object }) => {
	const id = object.id
	const name = object.name
	const type = capitalize(object.data_type)
	const appList = object.app_keys.map(fieldNameToString)
	
	return (
		<div>
			<h2>{fieldNameToString(name)}</h2>
			<table data-id={id}>
				<tbody>
					<tr>
						<td>EverTrue Field Name</td>
						<td>{name}</td>
					</tr>
					<tr>
						<td>Data Type</td>
						<td>{type}</td>
					</tr>
					<tr>
						<td>Usage</td>
						<td>{formatAppList(appList)}</td>
					</tr>	
				</tbody>
			</table>
		</div>
	)
}

export default Property;