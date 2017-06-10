import React from 'react';
import { Link } from 'react-router';

export default function ModelsList ({models, deleteModel, clickZip, }){

    return (
        <div className=''>
            { models.length ?
                <div className='models'>
                    <h4 className='sidebar-title'>Models</h4>
                    <ul className='sidebar-models-list'>
                    {
                        models.map( (model, index) => {
                            return <li key={index} className='models-link'>
                                <div className='model-item'><Link to={model.id} className='inline'><h4>{model.name}</h4></Link>
                                <span onClick={ deleteModel.bind(null, model.id) } className='glyphicon glyphicon-remove models-glyphicon'></span></div>
                                <hr className='custom-hr' />
                            </li>
                        })
                    }
                    </ul>
                </div>
                : null
            }
            <br />
            <button className='btn btn-custom-1 btn-default btn-outline waves-effect center-block'><Link to='create' className='btn-text'>ADD MODEL</Link></button>
            { models.length ? <button onClick={ clickZip } className='btn btn-custom-1 btn-default btn-outline waves-effect center-block'><span className='btn-text'>DOWNLOAD</span></button> : null }
        </div>
    );
}



