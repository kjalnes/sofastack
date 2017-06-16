import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function ModelsList (props){
    const { name, models, active, deleteModel, setActiveModel, clickZip, addModel } = props;

    const selectModel = (id) => {
        setActiveModel(id);
        browserHistory.push(`/${id}`);
    };

    const _deleteModel = (id) => {
        if(active === id) {
            browserHistory.push('/')
            setActiveModel(null);
        }
        deleteModel(id);
    };

    const generateModelsList = (models) => {
        return models.map( (model, idx) => {
            return <li key={idx} className='models-link'>
                <div className='model-item'><span onClick={()=> selectModel(model.id)} className='inline'><h4>{model.name}</h4></span>
                <span onClick={()=> _deleteModel(model.id)} className='glyphicon glyphicon-remove models-glyphicon'></span></div>
                <hr className='custom-hr' />
            </li>
        });
    };

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
                    { generateModelsList(models) }
                    </ul>
                </div>
                : null
            }
            <br />
            { models.length ?
                <button onClick={ clickZip } className='btn btn-custom-1 btn-default btn-outline center-block'><span className='btn-text'>DOWNLOAD</span></button> :
                null
            }
        </div>
    );
}


