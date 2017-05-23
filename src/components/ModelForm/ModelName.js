import React from 'react';

const ModelName = (props) => {
    const { showModelName, toggleShowName, name, onChange } = props;

    return (
        <div>
            { !showModelName ?
                <div>
                    <div>
                        <h4 className=''>Model name</h4>
                    </div>
                    <div className='row'>
                        <div className='col-xs-10'>
                            <input
                                onChange={onChange.bind(null, 'name')}
                                className="form-control"
                                value={name}
                                placeholder='Model name'/>
                        </div>
                        <div className='col-xs-2'>
                            <button onClick={toggleShowName} className='btn btn-primary'>Save</button>
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                    <div onClick={toggleShowName} className='col-xs-12'>
                        <h4 className='name-input'>{name}</h4> (Click to edit)
                    </div>
                </div>
            }
        </div>
    )
};

export default ModelName;
