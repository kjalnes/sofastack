import React from 'react';
import { Link } from 'react-router';

export default function ModelsList (props){
    return (
        <div className=''>
            <h3>Your models</h3>
            <ul>
            { props.models ?
                props.models.map( (model, index) => {
                    return <Link to={model.id} key={index}><h5>{model.name}</h5></Link>
                })
                : null
            }
            </ul>
            { props.models.length ?
                <button className='btn btn-default'>Download zip</button>
                : null
            }
            <button className='btn btn-default'><Link to='create'>Add new model</Link></button>
        </div>
    );
}
