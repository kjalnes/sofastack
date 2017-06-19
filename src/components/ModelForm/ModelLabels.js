import React from 'react';
import ReactTooltip from 'react-tooltip';

const ModelLabels = () => {
    return (
        <div className='row'>
            <div className='col-xs-4'>
                <label>Name <span data-tip data-for='attr-name' className='glyphicon glyphicon-question-sign'></span></label>
                <ReactTooltip className='custom-tooltip' id='attr-name' aria-haspopup='true' effect='solid' role='example' place='right'>
                     <p>Name the attributes that will appear in the model.</p>
                     <p>Examples</p>
                     <ul>
                       <li>firstName</li>
                       <li>lastName</li>
                       <li>age</li>
                     </ul>
                </ReactTooltip>
            </div>
            <div className='col-xs-4'>
                <label>Type <span data-tip data-for='attr-type' className='glyphicon glyphicon-question-sign'></span></label>
                <ReactTooltip className='custom-tooltip' id='attr-type' aria-haspopup='true' effect='solid' role='example' place='right'>
                     <p>Select the data type for the model attributes.</p>
                     <p>Examples</p>
                     <ul>
                       <li>firstName:   STRING</li>
                       <li>lastName:    STRING</li>
                       <li>age:         INTEGER</li>
                     </ul>
                </ReactTooltip>
            </div>
        </div>
    );
}

export default ModelLabels;
