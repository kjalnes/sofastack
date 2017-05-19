import React, { Component } from 'react';
import ModelAttr from './ModelAttr';
import InputName from './InputName';
import InputLabels from './InputLabels';
import uuidV4 from 'uuid/v4';

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state =  this.getDefaultState();
        this.saveAttr = this.saveAttr.bind(this);
        this.addNewAttr = this.addNewAttr.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.saveModel = this.saveModel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleNameInput = this.toggleNameInput.bind(this);
    }

    getDefaultState() {
        return {
            name: '',
            attrs: [{}],
            showBtn: false,
            showNameInput: true
        };
    }

    toggleNameInput() {
        return this.state.showNameInput
        ? this.setState({ showNameInput: false })
        : this.setState({ showNameInput: true })
    }

    onChange(type, ev) {
        console.log(ev.target.value)
        this.setState({ [type] : ev.target.value });
    }

    saveAttr(attr) {
        // add row to rows and show button
        let attrs = this.state.attrs;
        let attrUpdated = false;

        // update attr or add new attr
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
        this.setState(this.getDefaultState()); // reset
    }

    generateAttrs() {
        return this.state.attrs.map(attr => {
            const id = attr.id || uuidV4();
            return <ModelAttr
                saveAttr={ this.saveAttr }
                deleteAttr={ this.deleteAttr }
                onChange={ this.onChange }
                name={ attr.name }
                type= { attr.type }
                key={ id }
                id={ id } />;
        });
    }

    render() {
        return (
            <div>
                <h3>Create Sequelize Model</h3>
                <div className='well row'>
                    <InputName
                        showNameInput={this.state.showNameInput}
                        toggleNameInput={this.toggleNameInput}
                        name={this.state.name}
                        onChange={this.onChange} />
                    <hr />
                    <InputLabels />
                    { this.generateAttrs() }
                    { this.state.showBtn ? <button onClick={ this.addNewAttr } className='btn btn-primary'>+</button> : null }
                </div>
                <button onClick={ this.saveModel } className='btn btn-default pull-right'>Save Model</button>
            </div>
        );
    }
}

export default ModelForm;
