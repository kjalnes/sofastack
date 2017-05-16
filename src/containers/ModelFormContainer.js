import React from 'react';
import ModelForm from '../components/ModelForm';
import { connect } from 'react-redux';

const ModelFormContainer = () => {

    return (
        <div>
            <ModelForm />
            <button>Save Model</button>
        </div>
    )
}

// connect to redux store
export default ModelFormContainer;
