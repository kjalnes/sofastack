import React from 'react';

const InputName = (props) => {
    const { showNameInput, toggleNameInput, name, onChange } = props;

    return (
        <div>
            { !showNameInput ?
                <div className='row'>
                    <div onClick={ toggleNameInput } className='col-xs-12'>
                        <h4 className='name-input'>{name}</h4> (Click to edit)
                    </div>
                </div>
                :
                <div className='row'>
                    <div className='col-xs-12'>
                        <h4 className=''>Model name</h4>
                    </div>
                    <div className='col-xs-10'>
                        <input
                            onChange={ onChange.bind(null, 'name') }
                            className="form-control"
                            value={ name }
                            placeholder='Model name'/>
                    </div>
                    <div className='col-xs-2'>
                        <button onClick={ toggleNameInput } className='btn btn-primary model-form-btn'>Save</button>
                    </div>
                </div>
            }
        </div>
    )
};

export default InputName;
