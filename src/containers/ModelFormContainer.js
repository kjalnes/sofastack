import React from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel } from '../actions/model';

const ModelFormContainer = (props) => {
    return (
        <div>
            <div className='row'>
                <ModelForm saveModel={ props.saveModel } />
                <JSViewer models={ props.models }/>
            </div>
            <div className='row'>
                <JSONViewer />
                <div className='col-xs-6'>
                    <h3>Your models</h3>
                    <ul>
                    { props.models ? props.models.map( (model, index) => <li key={index}>{model.name}</li>) : null }
                    </ul>
                    { props.models.length ? <button className='btn btn-default'>Download zip</button>: null }

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        models: state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveModel: (model)=> dispatch(saveModel(model))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModelFormContainer);
