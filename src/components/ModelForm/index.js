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
            errorNameMsg: '',
            errorAttrMsg: ''
        };
        this.onChange = this.onChange.bind(this);
        this.addAttr = this.addAttr.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.updateAttr = this.updateAttr.bind(this);
        this.saveModel = this.saveModel.bind(this);
        this.updateModel = this.updateModel.bind(this);
    };

    onChange(type, ev) {
        this.setState({ [ type ] : ev.target.value, errorNameMsg: '' });
    };

    addAttr() {
        const attr = { name: '', type: 'STRING'};
        this.setState({ attrs: this.state.attrs.concat(attr), errorAttrMsg: '' });
    };

    updateAttr(idx, _type, value) {
        let attrs = this.state.attrs.map( (_attr, _idx) => {
            if(_idx === idx) {
                _attr[_type] = value;
            }
            return _attr;
        });
        this.setState(attrs);
    };

    deleteAttr(idx) {
        let attrs = this.state.attrs.filter( (attr, _idx) => _idx !== idx);
        this.setState({ attrs });
    };

    validateAttrs(attrs) {
        return attrs.filter( attr => attr.name !== '');
    };

    validate() {
        if(!this.state.name) {
            this.setState({errorNameMsg: 'Please name the model before saving.'});
            return true;
        }
        if(!this.state.attrs.length || this.state.attrs.length === 1 && !this.state.attrs[0].name) {
            this.setState({errorAttrMsg: 'Model must have at least one attribute.'});
            return true;
        }
        return false;
    };

    // redux dispatchers
    saveModel() {
        if(!this.validate()) {
            const name = this.state.name;
            const attrs = this.validateAttrs(this.state.attrs);
            const id = this.state.id || uuidV4();
            this.props.saveModel({ name, attrs, id });
            this.props.setActiveModel(id);
            browserHistory.push(`/${id}`);
        }
    };

    updateModel() {
        if(!this.validate()) {
            const { name, id } = this.state;
            const attrs = this.validateAttrs(this.state.attrs);
            this.props.updateModel({ name, attrs, id });
            this.props.setActiveModel(id);
            browserHistory.push(`/${id}`);
        }
    };

    generateAttrs() {
        return this.state.attrs.map( (attr, idx) => {
            const _attr = { name: attr.name, type: attr.type, idx:idx };
            return <ModelAttr
                key={idx}
                attr={_attr}
                deleteAttr={this.deleteAttr}
                updateAttr={this.updateAttr} />;
        });
    };

    componentDidMount() {
        if(this.props.model) {
            const newState = Object.assign({}, this.props.model);
            this.setState(newState);
        }
    };

    componentWillUpdate(nextProps) {
        if(nextProps !== this.props) {
            const newState = Object.assign({}, nextProps.model, { showInput: true });
            this.setState(newState);
        }
    };

    render() {
        const btnName = this.state.id ? 'UPDATE MODEL' : 'SAVE MODEL';
        const onClickFn = this.state.id ? this.updateModel : this.saveModel;
        return (
            <div>
                <div>
                    { this.state.errorNameMsg ? <div className='alert alert-warning fade in'>{this.state.errorNameMsg}</div> : null
                    }
                    <ModelName name={this.state.name} onChange={this.onChange} />
                    <hr />
                    { this.state.errorAttrMsg ? <div className='alert alert-warning fade in'>{this.state.errorAttrMsg}</div> : null
                    }
                    <ModelLabels />
                    { this.generateAttrs() }
                </div>
                <br />
                <button onClick={this.addAttr} className='btn btn-default'><span className='glyphicon glyphicon-plus'></span></button>
                <br />
                <br />
                <br />
                <button onClick={onClickFn} className='btn btn-default btn-custom-2'>{btnName}</button>
            </div>
        );
    }
}

export default ModelForm;

