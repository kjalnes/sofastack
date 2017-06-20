import React from 'react';
import ModelForm from '../components/ModelForm/';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

const ModelCreateContainer = (props) => {
    const { saveModel, updateModel, setActiveModel} = props;

    return (
        <div>
            <div className='page-content-wrapper'>
                <div className="page-content">
                    <div className="container">
                        <h2>Add Some Cushions to Your SofaStack</h2>
                        <p>The form below helps you build your models. Add attributes to your model and their types. We will take care of generating your SQL, Sequelize Code, and Express Routes.</p>
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" href="#collapse1">Sequelize Model Form</a>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ModelForm
                                            model={null}
                                            saveModel={saveModel}
                                            updateModel={updateModel}
                                            setActiveModel={setActiveModel} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    saveModel: (model) => dispatch(saveModel(model)),
    updateModel: (model) => dispatch(updateModel(model)),
    setActiveModel: (id) => dispatch(setActiveModel(id))
});

export default connect(null, mapDispatchToProps)(ModelCreateContainer);

