import React from 'react';
import ModelForm from '../components/ModelForm';

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
