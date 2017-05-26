import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';

class ModelDetailContainer extends Component {

    findModel(models) {
        return models.find(model => model.id === this.props.params.id);
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <ModelForm
                        model={this.findModel(this.props.models)}
                        saveModel={this.props.saveModel}
                        updateModel={this.props.updateModel} />
                    <JSViewer
                        model={this.findModel(this.props.models)}
                        models={this.props.models}  />
                </div>
                <div className='row'>
                    <JSONViewer models={this.props.models} />
                    <div className='col-xs-6 box'>
                        <h3>Your models </h3>
                        <ul>
                        { this.props.models ? this.props.models.map( (model, index) => <li key={index}>{model.name}</li>) : null }
                        </ul>
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
