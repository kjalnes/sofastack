import React, { Component } from 'react';
import ModelRow from './ModelRow';
import uuidV4 from 'uuid/v4';

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.existingState || this.getDefaultState();
        this.saveRow = this.saveRow.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.saveModel = this.saveModel.bind(this);
    }

    getDefaultState() {
        return {
            modelName: '',
            rows: [{}],
            showBtn: false,
        };
    }

    onChange(type, ev) {
        this.setState({ [type] : ev.target.value });
    }

    saveRow(row) {
        // add row to rows and show button
        let rows = this.state.rows;
        let rowUpdated = false;

        // update row or add new row
        rows = rows.map( _row => {
            if(_row.index === row.index) {
                _row = row;
                rowUpdated = true;
            }
            return _row;
        });

        if(!rowUpdated) {
            rows[ rows.length - 1 ] = row;
        }

        this.setState({ showBtn: true, rows });
    }

    addNewRow() {
        let rows = this.state.rows;

        rows.push({});
        this.setState({ showBtn: false, rows });
    }

    deleteRow(index) {
        let rows = this.state.rows;

        rows = rows.filter(row => row.index !== index);
        this.setState({ rows });
    }

    // save completed model to redux store
    saveModel() {
        const { modelName, rows } = this.state;
        const model = { modelName, rows };

        this.props.saveModel(model);
        this.setState(this.getDefaultState()); // reset the state to default
    }

    generateRows() {
        return this.state.rows.map(row => {
            const index = row.index || uuidV4();

            return <ModelRow
                saveRow={ this.saveRow }
                deleteRow={ this.deleteRow }
                onChange={ this.onChange }
                attr={ row.attr }
                type= { row.type }
                key={ index }
                index={ index }
            />;
        });
    }

    render() {
        return (
            <div>
                <h3>Create Sequelize Model</h3>
                <hr />
                <div className='panel-group' classID='accordion'>
                    <h4> Model name: </h4>
                    <input
                        onChange={ this.onChange.bind(this, 'modelName') }
                        className="form-control"
                        value={ this.state.modelName }
                        placeholder='Table name'/>
                    { this.generateRows() }
                    { this.state.showBtn ?
                        <button onClick={ this.addNewRow } className='btn btn-primary'>+</button>
                        : null
                    }
                    <button onClick={ this.saveModel } className='btn btn-default pull-right'>Save Model</button>
                </div>
            </div>
        );
    }
}

export default ModelForm;
