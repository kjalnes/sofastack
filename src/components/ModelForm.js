import React, { Component } from 'react';
import ModelRow from './ModelRow';
import uuidV4 from 'uuid/v4';

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: '',
            attrs: [{}],
            showBtn: false,
        };
        this.saveAttr = this.saveAttr.bind(this);
        this.addNewAttr = this.addNewAttr.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.saveModel = this.saveModel.bind(this);
    }

    getDefaultState() {
        return {
            name: '',
            attrs: [{}],
            showBtn: false,
        };
    }

    onChange(type, ev) {
        this.setState({ [type] : ev.target.value });
    }

    saveAttr(attr) {
        // add row to rows and show button
        let attrs = this.state.attrs;
        let attrUpdated = false;

        // update row or add new row
        attrs = attrs.map( _attr => {
            if(_attr.id === attr.id) {
                _attr = attr;
                attrUpdated = true;
            }
            return _attr;
        });

        if(!attrUpdated) {
            attrs[ attrs.length - 1 ] = attr;
        }

        this.setState({ showBtn: true, attrs });
    }

    addNewAttr() {
        let attrs = this.state.attrs;
        attrs.push({});
        this.setState({ showBtn: false, attrs });
    }

    deleteAttr(id) {
        let attrs = this.state.attrs;

        attrs = attrs.filter(attr => attr.id !== id);
        this.setState({ attrs });
    }

    // save completed model to redux store
    saveModel() {
        const { name, attrs } = this.state;
        const model = { name, attrs };

        this.props.saveModel(model);
        this.setState(this.getDefaultState()); // reset the state to default
    }

    generateAttrs() {
        return this.state.attrs.map(attr => {
            const id = attr.id || uuidV4();

            return <ModelRow
                saveAttr={ this.saveAttr }
                deleteAttr={ this.deleteAttr }
                onChange={ this.onChange }
                name={ attr.name }
                type= { attr.type }
                key={ id }
                id={ id }
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
                        onChange={ this.onChange.bind(this, 'name') }
                        className="form-control"
                        value={ this.state.name }
                        placeholder='Table name'/>
                    { this.generateAttrs() }
                    { this.state.showBtn ?
                        <button onClick={ this.addNewAttr } className='btn btn-primary'>+</button>
                        : null
                    }
                    <button onClick={ this.saveModel } className='btn btn-default pull-right'>Save Model</button>
                </div>
            </div>
        );
    }
}

export default ModelForm;
