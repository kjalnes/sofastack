import React, { Component } from 'react';


class InputForm extends Component {
    constructor() {
        super();
        this.state = { modelName: '', attr: '', type: 'string', rows: [], addRow: false }
        this.onChange = this.onChange.bind(this);
        this.addRow = this.addRow.bind(this);
    }

    onChange(type, ev) {
        // console.log(type, ev.target.value)
        this.setState({[type] : ev.target.value})
    }

    addRow(ev) {
        ev.preventDefault();
        const row = { attr: this.state.attr, type: this.state.type }
        // add row to rows arr and reset attr and type
        this.setState({rows : this.state.rows.concat([row]), attr: '', type: '', addRow: true })
    }

    render() {
        return (
                <div className='form-group'>

                    <form className='custom-form well'>
                        <h3>Create Sequelize Model</h3>
                        <div className="form-group  form">
                            <input
                                onChange={ this.onChange.bind(null, 'modelName') }
                                className="form-control"
                                value={this.state.modelName}
                                placeholder='Table name'/>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={ this.onChange.bind(null, 'attr') }
                                className="form-control"
                                value={this.state.attr}
                                placeholder='Attribute key'/>
                        </div>
                        <div className="form-group">
                            <select onChange={ this.onChange.bind(null, 'type') } className='selectpicker form-control show-tick' data-width='350px'>
                                <option value="string">String</option>
                                <option value="integer">Integer</option>
                                <option value="date">Date</option>
                                <option value="bool">Boolean</option>
                            </select>
                        </div>
                        <button onClick={ this.addRow } className='btn btn-primary'>Add row</button>
                    </form>
                    { this.state.addRow ?
                        <div>add another form here </div>
                        : null
                    }
                </div>

        )
    }
}

export default InputForm;
