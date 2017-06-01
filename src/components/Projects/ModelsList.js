import React from 'react';
import { Link } from 'react-router';

export default function ModelsList ({models, deleteModel, clickZip, }){
    function onClickDelete(id) {
        deleteModel(id);
    }

    return (
        <div className=''>
            { models.length ?
                <div>
                    <h3>Your models</h3>
                    <ul>
                    {
                        models.map( (model, index) => {
                            return <div key={index}>
                                <Link to={model.id} className='inline'><h4>{model.name}</h4></Link>
                                    <span onClick={ onClickDelete.bind(null, model.id) } className='glyphicon glyphicon-remove models-list-icon'></span>
                                </div>
                        })
                    }
                    </ul>
                    <br />
                </div>
                : null
            }
            <br />
            <button className='btn btn-default'><Link to='create'>Add new model</Link></button>
            { models.length ?
                <button onClick={ clickZip } className='btn btn-default'>Download zip</button> :
                null
            }
        </div>
    );
}

