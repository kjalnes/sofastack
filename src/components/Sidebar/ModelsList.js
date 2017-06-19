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
            let activeClass = model.id === active ? 'fa fa-long-arrow-right' : '';

            return (
                <li key={idx} className='models-link'>
                    <div className='model-item-container'>
                        <div className='model-item-icon-container model-item-icon-arrow'>
                            <i className={activeClass} aria-hidden='true'></i>
                        </div>
                        <div className='model-item'>
                            <span onClick={()=> selectModel(model.id)} className='inline'>
                                <h5>{model.name}</h5>
                            </span>
                            <div className='model-item-icon-container'>
                                <i onClick={()=> _deleteModel(model.id)} className='fa fa-trash-o models-trash' aria-hidden='true'></i>
                            </div>
                        </div>
                    </div>
                    <hr className='custom-hr' />
                </li>
            );
        });
    };


    return (
        <div className=''>
            {name ?
                <div className='title-wrapper'>
                    <h4 className='sidebar-title inline'>Models</h4>

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
        </div>
    );
}


