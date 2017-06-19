import React from 'react';

const ModelName = ({ name, onChange }) => {
    return (
        <div>
            <label>Model name</label>
            <input
                onChange={onChange.bind(null, 'name')}
                className="form-control"
                value={name}
                placeholder='Model name'/>
        </div>
    )
};

export default ModelName;

