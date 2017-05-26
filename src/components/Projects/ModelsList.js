import React from 'react';

export default function ModelsList (props){
	console.log('hhh',props.models[0])
	return (
		<div className='col-xs-6'>
        	<h4>{props.models[0]}</h4>
            <ul>
            { props.models ? props.models.map( (model, index) => <li key={index}>{model.name}</li>) : null }
            </ul>
        </div>
	);
}