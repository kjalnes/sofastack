import React, { Component } from 'react';

class ModelAttr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            type: props.type || 'string',
            id: props.id
        };
        this.onChange = this.props.onChange.bind(this);
        this.saveAttrAndArchive = this.saveAttrAndArchive.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
    }

    saveAttrAndArchive() {
        this.props.saveAttr(this.state);
    }

    deleteAttr() {
        this.props.deleteAttr(this.state.id)
    }

    render() {
        const id = this.state.id;

        return (
            <div className="row">
                    <div className='col-xs-5'>
                        <input
                            onChange={ this.onChange.bind(this, 'name') }
                            className="form-control"
                            value={ this.state.name }
                            placeholder='Attribute key'/>
                    </div>
                    <div className='col-xs-4'>
                        <select onChange={ this.onChange.bind(this, 'type') } className='selectpicker form-control show-tick' data-width=''>
                            <option value="string">String</option>
                            <option value="integer">Integer</option>
                            <option value="date">Date</option>
                            <option value="bool">Boolean</option>
                        </select>
                    </div>
                    <div className='col-xs-3'>
                        <button onClick={ this.saveAttrAndArchive } className='btn btn-primary'>+</button>
                        <button onClick={ this.deleteAttr } className='btn btn-danger'>x</button>
                    </div>
            </div>
        )
    }
}

export default ModelAttr;
