import React, { Component } from 'react';

class ModelRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attr: props.attr || '',
            type: props.type || 'string',
            // rowTitle: props.attr || '',
            index: props.index
        };
        this.onChange = this.props.onChange.bind(this);
        this.addRowAndArchive = this.addRowAndArchive.bind(this);
    }

    addRowAndArchive() {
        const { attr, type } = this.state;
        // this.setState({ rowTitle: attr });
        this.props.saveRow(this.state);
    }

    render() {
        const index = this.state.index;

        return (
            <div className="panel panel-default well">
                <div className="panel-heading">
                    <h4 className="panel-title"><a data-toggle="collapse" data-parent={`#accordion${index}`} href={`#collapse${index}`}>{ this.state.attr || 'Row' }</a></h4>
                </div>
                <div id={`collapse${index}`} className="panel-collapse collapse in">
                    <div className="panel-body">
                        <form className='custom-form'>
                            <input
                                onChange={ this.onChange.bind(this, 'attr') }
                                className="form-control"
                                value={ this.state.attr }
                                placeholder='Attribute key'/>
                            <select onChange={ this.onChange.bind(this, 'type') } className='selectpicker form-control show-tick' data-width='350px'>
                                <option value="string">String</option>
                                <option value="integer">Integer</option>
                                <option value="date">Date</option>
                                <option value="bool">Boolean</option>
                            </select>
                            <a data-toggle="collapse" data-parent={`#accordion${index}`} href={`#collapse${index}`}><button onClick={ this.addRowAndArchive } className='btn btn-primary'>Save row</button></a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModelRow;
