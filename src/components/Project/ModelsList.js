import React from 'react';
import { Link, browserHistory } from 'react-router';


// danni's version:
//export default function ModelsList ({name, models, deleteModel, setActiveModel, clickZip, addModel}){
// kris' version:
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


