import React, { Component } from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

class ModelDetailContainer extends Component {


    findModel(models) {
        if(this.props.active) {
                return models.find(model => model.id === this.props.active);
        }
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
                                updateModel={this.props.updateModel}
                                setActiveModel={this.props.setActiveModel} />
                            <JSViewer
                                model={this.findModel(this.props.models)}
                                models={this.props.models}
                                active={this.props.active} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelDetailContainer);




