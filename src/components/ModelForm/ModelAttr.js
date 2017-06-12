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
                    <select onChange={this.onChange.bind(null, 'type')} className='selectpicker form-control show-tick'>
                        <option value={STRING}>{STRING}</option>
                        <option value={INTEGER}>{INTEGER}</option>
                        <option value={DATE}>{DATE}</option>
                        <option value={BOOLEAN}>{BOOLEAN}</option>
                    </select>
                </div>
                <div className='col-xs-4'>
                    <button onClick={this.deleteAttr} className='btn btn-default'><span className='glyphicon glyphicon-remove'></span></button>
                </div>
            </div>
        )
    }
}

export default ModelAttr;

