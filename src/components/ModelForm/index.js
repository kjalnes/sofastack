import React, { Component } from 'react';
import ModelAttr from './ModelAttr';
import ModelName from './ModelName';
import ModelLabels from './ModelLabels';
import uuidV4 from 'uuid/v4';
import { browserHistory } from 'react-router';

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            name: '',
            attrs: [{name: '', type:'STRING'}],
            id: null,
            showInput: true
        };
        this.addAttr = this.addAttr.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.saveModel = this.saveModel.bind(this);
        this.updateModel = this.updateModel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
        this.updateAttr = this.updateAttr.bind(this);
    }

    onChange(type, ev) {
        this.setState({ [ type ] : ev.target.value });
    }

    toggleInput() {
        this.setState({ showInput: !this.state.showInput });
    }

    updateAttr(idx, _type, value) {
        let attrs = this.state.attrs.map( (_attr, _idx) => {
            if(_idx === idx) {
                _attr[_type] = value;
            }
            return _attr;
        });
        this.setState(attrs);
    }

    addAttr() {
        const attr = { name: '', type: 'STRING'};
        this.setState({ attrs: this.state.attrs.concat(attr) });
    }

    deleteAttr(idx) {
        let attrs = this.state.attrs.filter( (attr, _idx) => _idx !== idx);
        this.setState({ attrs });
    }

    validateAttrs(attrs) {
        return attrs.filter( attr => attr.name !== '');
    }

    // save model to redux store
    saveModel() {
        // needs to remove any emptu atts before sending off to redux
        const name = this.state.name;
        const attrs = this.validateAttrs(this.state.attrs);
        const id = this.state.id || uuidV4();
        const model = { name, attrs, id };
        this.props.saveModel(model);
        this.props.setActiveModel(id);
        browserHistory.push(`/${id}`);
    }

    // update model in redux store
    updateModel() {
        const { name, id } = this.state;
        const attrs = this.validateAttrs(this.state.attrs);
        const model = { name, attrs, id };
        this.props.updateModel(model);
        this.props.setActiveModel(id);
        browserHistory.push(`/${id}`);
    }

    generateAttrs() {
        return this.state.attrs.map( (attr, idx) => {
            const _attr = { name: attr.name, type: attr.type, idx:idx };
            return <ModelAttr
                key={idx}
                attr={_attr}
                deleteAttr={this.deleteAttr}
                updateAttr={this.updateAttr} />;
        });
    }

    componentDidMount() {
        if(this.props.model) {
            const newState = Object.assign({}, this.props.model);
            this.setState(newState);
        }
    }

    componentWillUpdate(nextProps) {
        if(nextProps !== this.props) {
            const newState = Object.assign({}, nextProps.model, { showInput: true });
            this.setState(newState);
        }
    }

    render() {
        const btnName = this.state.id ? 'Update model' : 'Save model';
        const onClickFn = this.state.id ? this.updateModel : this.saveModel;
        return (
            <div className=''>
                <div>
                    <ModelName
                        showInput={this.state.showInput}
                        toggleInput={this.toggleInput}
                        name={this.state.name}
                        onChange={this.onChange} />
                    <hr />
                    <ModelLabels />
                    { this.generateAttrs() }
                </div>
                <br />
                <button onClick={this.addAttr} className='btn btn-primary'>+</button>
                <button onClick={onClickFn} className='btn btn-default model-save-btn'>{btnName}</button>
            </div>
        );
    }
}

export default ModelForm;

