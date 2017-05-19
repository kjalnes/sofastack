import React from 'react';

const InputLabels = () => {
    return (
        <div className='row'>
            <div className='col-xs-5'>
                 <label>Name <span className='glyphicon glyphicon-question-sign'></span></label>
            </div>
            <div className='col-xs-7'>
                <label>Type <span className='glyphicon glyphicon-question-sign'></span></label>
            </div>
        </div>
    )
}

export default InputLabels;
