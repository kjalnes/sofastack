import React, { Component } from 'react';
import { DATE, STRING, INTEGER, BOOLEAN } from '../../../shared/attrTypes';

class ModelAttr extends Component {
    constructor(props) {
        super(props);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(type, ev) {
        // fire on updateAttr in parent
        // console.log(type, ev.target.value, this.props.attr.id);
        // console.log('this.props.attr', this.props.attr);
        this.props.updateAttr(this.props.attr.idx, type, ev.target.value);
    }

    deleteAttr() {
        this.props.deleteAttr(this.props.attr.idx)
    }

    render() {
        const btn = this.props.attr.name ? 'Update' : 'Save';
        return (
            <div className='row'>
                <div className='col-xs-4'>
                    <input
                        onChange={this.onChange.bind(null, 'name')}
                        className='form-control'
                        value={this.props.attr.name}
                        placeholder='Name'/>
                </div>
                <div className='col-xs-4'>
                    <button onClick={this.deleteAttr} className='btn btn-danger model-form-btn'>Delete</button>
                </div>
            </div>
        )
    }
}

export default ModelAttr;
                // <div className='col-xs-4'>
                //     <select onChange={this.onChange.bind(null, 'type')} className='selectpicker form-control show-tick'>
                //         <option value={STRING}>{STRING}</option>
                //         <option value={INTEGER}>{INTEGER}</option>
                //         <option value={DATE}>{DATE}</option>
                //         <option value={BOOLEAN}>{BOOLEAN}</option>
                //     </select>
                // </div>
                // <button onClick={this.saveAttrAndArchive} className='btn btn-primary model-form-btn'>{btn}</button>
