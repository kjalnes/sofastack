import React from 'react';
import ModelForm from '../components/ModelForm';
import { connect } from 'react-redux';
import { saveModel } from '../actions/model';

const ModelFormContainer = (props) => {
    console.log('props.models', props.models)
    return (
        <div className='row'>
            <div className='col-xs-6'>
                <ModelForm saveModel={ props.saveModel } />
            </div>
            <div>
                Your models:
                <br />
                <ul>
                { props.models.map( model => <li>{model.modelName}</li> )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        models: state.models
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveModel: (model)=> dispatch(saveModel(model))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModelFormContainer);
