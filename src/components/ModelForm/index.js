import React, { Component } from 'react';
import ModelAttr from './ModelAttr';
import ModelName from './ModelName';
import ModelLabels from './ModelLabels';
import uuidV4 from 'uuid/v4';
import { browserHistory } from 'react-router';


class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state =  this.getDefaultState();
        this.saveAttr = this.saveAttr.bind(this);
        this.addNewAttr = this.addNewAttr.bind(this);
        this.deleteAttr = this.deleteAttr.bind(this);
        this.saveModel = this.saveModel.bind(this);
        this.updateModel = this.updateModel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleShowName = this.toggleShowName.bind(this);
    }

    getDefaultState() {
        return {
            name: '',
            attrs: [{}],
            id: null,
            showBtn: false,
            showModelName: false
        };
    }

    onChange(type, ev) {
        this.setState({ [ type ] : ev.target.value });
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
                console.log('attr is updated')
                attrUpdated = true;
            }
            return _attr;
        });

        if(!attrUpdated) {
            console.log('attr is not updated')
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
        const id = this.state.id || uuidV4();
        const model = { name, attrs, id };
        this.props.saveModel(model);
        browserHistory.push(`/${id}`);
    }

    // update model in redux store
    updateModel() {
        console.log('update model gets called')
        const { name, attrs, id } = this.state;
        console.log('updated attr', attrs)
        const model = { name, attrs, id };
        this.props.updateModel(model);
        browserHistory.push(`/${id}`);
    }

    generateAttrs() {
        return this.state.attrs.map(attr => {
            const id = attr.id || uuidV4();
            const _attr = { name: attr.name, type: attr.type, id}
            return <ModelAttr
                saveAttr={this.saveAttr}
                deleteAttr={this.deleteAttr}
                onChange={this.onChange}
                name={attr.name}
                type= {attr.type}
                key={id}
                id={id}
                attr={_attr} />;
        });
    }

    componentDidMount() {
        if(this.props.model) {
            this.setState(this.props.model);
        }
    }

    render() {
        const btnName = this.state.id ? 'Update model' : 'Save model';
        const onClickFn = this.state.id ? this.updateModel : this.saveModel;


        return (
            <div className='col-xs-6 box'>
                <h3>Create Sequelize Model</h3>
                <div className='model-form'>
                    <div>
                        <ModelName
                            showModelName={this.state.showModelName}
                            toggleShowName={this.toggleShowName}
                            name={this.state.name}
                            onChange={this.onChange} />
                        <hr />
                        <ModelLabels />
                        { this.generateAttrs() }
                        { this.state.showBtn ?
                            <button onClick={this.addNewAttr} className='btn btn-primary'>+</button>
                            :
                            null
                        }
                    </div>
                    <br />
                    <button onClick={onClickFn} className='btn btn-default pull-right model-save-btn'>{btnName}</button>
                </div>
            </div>
        );
    }
}

export default ModelForm;
