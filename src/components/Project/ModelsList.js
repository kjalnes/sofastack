import React from 'react';
import { Link, browserHistory } from 'react-router';


export default function ModelsList ({name, models, deleteModel, setActiveModel, clickZip, addModel}){

    function selectModel(id) {
        setActiveModel(id);
        browserHistory.push(`/${id}`);
    }

    function deleteModel(id) {
        setActiveModel(null);
        deleteModel(id);
    }

    return (
        <div className=''>
            {name ?
                <div className='models row'>
                    <h5 className='sidebar-title col-md-9'>Models</h5>
                    <span onClick={addModel} className='glyphicon glyphicon-plus col-md-3'></span>
                </div>
                :null
            }
            { models.length ?
                <div className='models'>
                    
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


