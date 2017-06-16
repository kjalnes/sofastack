import React from 'react';
import { Link, browserHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';

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
                <div className='model-item'><span onClick={()=> selectModel(model.id)} className='inline'><h5>{model.name}</h5></span>
                <i onClick={()=> _deleteModel(model.id)} className='fa fa-trash-o models-trash' aria-hidden='true'></i></div>
                <hr className='custom-hr' />
            </li>
        });
    };


    return (
        <div className=''>
            {name ?
                <div className='title-wrapper'>
                    <span className='models-title'><h4 className='sidebar-title inline'>Models</h4></span>

                    <span onClick={addModel} className='glyphicon glyphicon-plus models-glyph-plus' data-tip='Add new model'></span>
                    <ReactTooltip place='right' effect='solid' type='light' />
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


