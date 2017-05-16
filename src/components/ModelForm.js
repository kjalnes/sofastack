import React, { Component } from 'react';
import ModelRow from './ModelRow';

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modelName: '',
            rows: [{}],
            showBtn: false,
        };
        this.saveRow = this.saveRow.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
    }

    onChange(type, ev) {
        this.setState({ [type] : ev.target.value });
    }

    saveRow(row) {
        // add the row to this.state.rows and show the button
        const rows = this.state.rows;
        // replace {} with new row
        rows[ rows.length - 1 ] = row;
        this.setState({ showBtn: true, rows });
    }

    addNewRow() {
        let rows = this.state.rows;
        rows.push({});
        this.setState({ showBtn: false, rows });
    }

    generateRows() {
        return this.state.rows.map((row, index) => {
            return <ModelRow
                saveRow={ this.saveRow }
                onChange={ this.onChange }
                attr={ row.attr }
                type= { row.type}
                key={ index }
                index={ index }
            />;
        });
    }

    render() {
        return (
            <div>
                <h3>Create Sequelize Model</h3>
                <div className='panel-group' classID='accordion'>
                    Model name:
                    <input
                        onChange={ this.onChange.bind(this, 'modelName') }
                        className="form-control"
                        value={this.state.modelName}
                        placeholder='Table name'/>
                    { this.generateRows() }
                    { this.state.showBtn ?
                        <button onClick={ this.addNewRow } className='btn btn-primary'>+</button>
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default ModelForm;
