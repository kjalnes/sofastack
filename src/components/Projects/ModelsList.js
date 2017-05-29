import React from 'react';
import { Link } from 'react-router';

export default function ModelsList (props){
    return (
        <div className=''>
            { props.models.length ?
                <div>
                    <h3>Your models</h3>
                    <ul>
                    {
                        props.models.map( (model, index) => {
                            return <Link to={model.id} key={index}><h4>{model.name}</h4></Link>
                        })
                    }
                    </ul>
                    <br />
                </div>
                : null
            }
            <br />
            <button className='btn btn-default'><Link to='create'>Add new model</Link></button>
            { props.models.length ? <button className='btn btn-default'>Download zip</button> : null }
        </div>
    );
}
