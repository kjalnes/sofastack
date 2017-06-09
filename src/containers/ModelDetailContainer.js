import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
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
            <div className='page-content-wrapper'>
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <ModelForm
                                model={this.findModel(this.props.models)}
                                saveModel={this.props.saveModel}
                                updateModel={this.props.updateModel} />
                            <JSViewer model={this.findModel(this.props.models)} />
                        </div>
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




