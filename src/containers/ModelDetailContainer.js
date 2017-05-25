import React, { Component } from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';

class ModelDetailContainer extends Component {

    findModel() {
        return this.props.models.find(model => model.id === this.props.params.id);
    }

    componentDidUpdate(){
        if(this.props.params.id !== 'create' && !this.findModel() ) {
            this.props.router.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <ModelForm saveModel={ this.props.saveModel } model={ this.findModel() } />
                    <JSViewer models={ this.props.models } />
                </div>
                <div className='row'>
                    <JSONViewer models={ this.props.models } />
                    <div className='col-xs-6 box'>
                        <h3>Your models </h3>
                        <ul>
                        { this.props.models ? this.props.models.map( (model, index) => <li key={index}>{model.name}</li>) : null }
                        </ul>
                        { this.props.models.length ? <button className='btn btn-default'>Download zip</button>: null }
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        models: state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveModel: (model) => dispatch(saveModel(model)),
        updateModel: (model) => dispatch(updateModel(model))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModelDetailContainer);
