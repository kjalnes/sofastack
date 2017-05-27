import React, { Component } from 'react';
import { DATE, STRING, INTEGER, BOOLEAN } from '../../../shared/attrTypes';

class ModelAttr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            type: props.type || STRING,
            id: props.id
        };
        this.saveAttrAndArchive = this.saveAttrAndArchive.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(type, ev) {
        this.setState({ [type] : ev.target.value });
    }

    saveAttrAndArchive() {
        this.props.saveAttr(this.state);
    }

    deleteAttr() {
        this.props.deleteAttr(this.state.id)
    }

    // componentWillMount() {
    //     if(this.props.attr) {
    //         console.log('this.props.attr exist',this.props.attr)
    //         this.setState(this.props.attr);
    //     }
    // }

    render() {
        const btn = this.props.name ? 'Update' : 'Save';

        return (
            <div className='row'>
                <div className='col-xs-4'>
                    <input
                        onChange={this.onChange.bind(null, 'name')}
                        className='form-control'
                        value={this.state.name}
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
                    <button onClick={this.saveAttrAndArchive} className='btn btn-primary model-form-btn'>{btn}</button>
                    <button onClick={this.deleteAttr} className='btn btn-danger model-form-btn'>Delete</button>
                </div>
            </div>
        )
    }
}

export default ModelAttr;
