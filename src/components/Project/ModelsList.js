import React from 'react';
import { Link, browserHistory } from 'react-router';


export default function ModelsList ({models, deleteModel, setActiveModel, clickZip }){

    function selectModel(id) {
        setActiveModel(id);
        browserHistory.push(`/${id}`);
    }

    function deleteModel(id) {
        setActiveModel(null);
        deleteModel(id);
        browserHistory.push(`/`);
    }

    return (
        <div className=''>
            { models.length ?
                <div className='models'>
                    <h4 className='sidebar-title'>Models</h4>
                    <ul className='sidebar-models-list'>
                    {
                        models.map( (model, index) => {
                            return <li key={index} className='models-link'>
                                <div className='model-item'><span onClick={()=> selectModel(model.id)} className='inline'><h4>{model.name}</h4></span>
                                <span onClick={()=> deleteModel(model.id)} className='glyphicon glyphicon-remove models-glyphicon'></span></div>
                                <hr className='custom-hr' />
                            </li>
                        })
                    }
                    </ul>
                </div>
                : null
            }
            <br />

            { models.length ? <button onClick={ clickZip } className='btn btn-custom-1 btn-default btn-outline waves-effect center-block'><span className='btn-text'>DOWNLOAD</span></button> : null }
        </div>
    );
}


