import React from 'react';
import { Link, browserHistory } from 'react-router';


export default function ModelsList (props){
    const { models, deleteModel, setActiveModel, clickZip } = props;

    const selectModel = (id) => {
        setActiveModel(id);
        browserHistory.push(`/${id}`);
    };

    const _deleteModel = (id) => {
        setActiveModel(null);
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
            { models.length ?
                <div className='models'>
                    <h4 className='sidebar-title'>Models</h4>
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


