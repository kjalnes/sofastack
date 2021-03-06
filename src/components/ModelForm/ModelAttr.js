import React from 'react';
import { DATE, STRING, INTEGER, BOOLEAN } from '../../../shared/attrTypes';

const ModelAttr = ({updateAttr, deleteAttr, attr, }) => {

    const onChange = (type, ev) => updateAttr(attr.idx, type, ev.target.value);

    return (
        <div className='row'>
            <div className='col-xs-4'>
                <input
                    onChange={onChange.bind(null, 'name')}
                    className='form-control'
                    value={attr.name}
                    placeholder='Name'/>
            </div>
            <div className='col-xs-4'>
                <select onChange={onChange.bind(null, 'type')} className='selectpicker form-control show-tick'>
                    <option value={STRING}>{STRING}</option>
                    <option value={INTEGER}>{INTEGER}</option>
                    <option value={DATE}>{DATE}</option>
                    <option value={BOOLEAN}>{BOOLEAN}</option>
                </select>
            </div>
            <div className='col-xs-4'>
                <i onClick={ ()=> deleteAttr(attr.idx)} className='fa fa-trash-o fa-lg attr-trash' aria-hidden='true'></i>
            </div>
        </div>
    )
};


export default ModelAttr;

