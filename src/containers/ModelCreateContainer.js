import React, { Component } from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

class ModelCreateContainer extends Component {

    render() {
        return (
            <div className='page-content-wrapper'>
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <ModelForm
                                model={null}
                                saveModel={this.props.saveModel}
                                updateModel={this.props.updateModel}
                                setActiveModel={this.props.setActiveModel} />
                            <JSViewer
                                model={null} />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        models: state.models,
        active: state.active
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveModel: (model) => dispatch(saveModel(model)),
        updateModel: (model) => dispatch(updateModel(model)),
        setActiveModel: (id) => dispatch(setActiveModel(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreateContainer);




