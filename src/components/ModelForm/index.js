import React, { Component } from 'react';
import ModelAttr from './ModelAttr';
import ModelName from './ModelName';
import ModelLabels from './ModelLabels';
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
        this.toggleShowName = this.toggleShowName.bind(this);
    }

    getDefaultState() {
        return {
            name: '',
            attrs: [{}],
            showBtn: false,
            showModelName: false
        };
    }

    onChange(type, ev) {
        this.setState({ [type] : ev.target.value });
    }

    toggleShowName() {
        this.setState({ showModelName: !this.state.showModelName });
    }

    saveAttr(attr) {
        let attrs = this.state.attrs;
        let attrUpdated = false;

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

    // save model to redux store
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
                saveAttr={this.saveAttr}
                deleteAttr={this.deleteAttr}
                onChange={this.onChange}
                name={attr.name}
                type= {attr.type}
                key={id}
                id={id} />;
        });
    }

    render() {
        return (
            <div className='col-xs-6 box'>
                <h3>Create Sequelize Model</h3>
                <div className='model-form'>
                    <div className=''>
                        <ModelName
                            showModelName={this.state.showModelName}
                            toggleShowName={this.toggleShowName}
                            name={this.state.name}
                            onChange={this.onChange} />
                        <hr />
                        <ModelLabels />
                        { this.generateAttrs() }
                        { this.state.showBtn ? <button onClick={this.addNewAttr} className='btn btn-primary'>+</button> : null }
                    </div>
                    <br />
                    <button onClick={this.saveModel} className='btn btn-default pull-right model-save-btn'>Save Model</button>
                </div>
            </div>
        );
    }
}

export default ModelForm;
