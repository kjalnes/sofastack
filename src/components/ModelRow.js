import React, { Component } from 'react';

class ModelRow extends Component {
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
            <div className="panel panel-default well">
                <div className="panel-heading">
                    <h4 className="panel-title"><a data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapse${id}`}>{ this.state.name || 'Row' }</a></h4>
                </div>
                <div id={`collapse${id}`} className="panel-collapse collapse in">
                    <div className="panel-body">
                        <form className='custom-form'>
                            <input
                                onChange={ this.onChange.bind(this, 'name') }
                                className="form-control"
                                value={ this.state.name }
                                placeholder='Attribute key'/>
                            <select onChange={ this.onChange.bind(this, 'type') } className='selectpicker form-control show-tick' data-width='350px'>
                                <option value="string">String</option>
                                <option value="integer">Integer</option>
                                <option value="date">Date</option>
                                <option value="bool">Boolean</option>
                            </select>
                            <a data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapse${id}`}><button onClick={ this.saveAttrAndArchive } className='btn btn-primary'>Save Attr</button></a>
                            <button onClick={ this.deleteAttr } className='btn btn-danger'>Delete row</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModelRow;
