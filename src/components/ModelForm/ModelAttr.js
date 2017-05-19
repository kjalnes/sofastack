import React, { Component } from 'react';

class ModelAttr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            type: props.type || 'string',
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

    render() {
        const id = this.state.id;

        return (
            <div className="row">
                    <div className='col-xs-4'>
                        <input
                            onChange={ this.onChange.bind(null, 'name') }
                            className="form-control"
                            value={ this.state.name }
                            placeholder='Name'/>
                    </div>
                    <div className='col-xs-4'>
                        <select onChange={ () => this.onChange.bind(null, 'type') } className='selectpicker form-control show-tick' data-width=''>
                            <option value="string">String</option>
                            <option value="integer">Integer</option>
                            <option value="date">Date</option>
                            <option value="bool">Boolean</option>
                        </select>
                    </div>
                    <div className='col-xs-4'>
                        { this.props.name ?
                            <button onClick={ this.saveAttrAndArchive } className='btn btn-primary model-form-btn'>Update</button>
                            :
                            <button onClick={ this.saveAttrAndArchive } className='btn btn-primary model-form-btn'>Save</button>
                        }

                        <button onClick={ this.deleteAttr } className='btn btn-danger model-form-btn'>Delete</button>
                    </div>
            </div>
        )
    }
}

export default ModelAttr;
