import React from 'react';

const ModelName = (props) => {
    const { showInput, toggleInput, name, onChange } = props;

    return (
        <div>
            <h5 className=''>Model name</h5>
            { showInput ?
                <div className='row'>
                    <div className='col-xs-10'>
                        <input
                            onChange={onChange.bind(null, 'name')}
                            className="form-control"
                            value={name}
                            placeholder='Model name'/>
                    </div>
                    <div className='col-xs-2'>
                        <button onClick={toggleInput} className='btn btn-primary'>Save</button>
                    </div>
                </div>
                :
                <div className='row'>
                    <div className='col-xs-12'>
                        <h4 className='inline'>{name}</h4>
                        <button onClick={toggleInput} type='button' className='btn btn-default'><span className="glyphicon glyphicon-pencil"></span></button>
                    </div>
                </div>
            }
        </div>
    )
};

export default ModelName;

