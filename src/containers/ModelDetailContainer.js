import React from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

const ModelDetailContainer = (props) => {
    const { active, models, saveModel, updateModel, setActiveModel, name } = props;

    const findModel = (models) => {
        if(active) {
            return models.find(model => model.id === active);
        }
    };

    return (
        <div className='page-content-wrapper'>
            <div className="page-content">
                <div className="container">
                    <h2>Build your sofa stack</h2>
                    <p>Bacon ipsum dolor amet turducken alcatra ham hock, ribeye beef ribs ball tip ham kielbasa boudin jerky pork swine. Pork loin tail meatball, boudin short ribs tongue kevin turkey swine beef ribs chicken salami prosciutto. Biltong jerky pork chop tongue, ground round bacon salami andouille. Swine ham turducken alcatra pig bacon chicken ham hock corned beef filet mignon strip steak frankfurter kielbasa landjaeger short loin.</p>
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#collapse1">Sequelize Model Form </a>
                                </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <ModelForm
                                        model={findModel(models)}
                                        saveModel={saveModel}
                                        updateModel={updateModel}
                                        setActiveModel={setActiveModel} />
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#collapse2">Sequelize Model</a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <JSViewer
                                        model={findModel(models)}
                                        models={models}
                                        active={active}
                                        codeCat='sequelize' />
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#collapse3">Routes</a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <JSViewer
                                        model={findModel(models)}
                                        models={models}
                                        active={active}
                                        codeCat='express' />
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#collapse4">Package.json</a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <JSViewer
                                        name={name}
                                        model={findModel(models)}
                                        models={models}
                                        active={active}
                                        codeCat='packagejson' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    models: state.models,
    active: state.active,
    name: state.name

});

const mapDispatchToProps = (dispatch) => ({
    saveModel: (model) => dispatch(saveModel(model)),
    updateModel: (model) => dispatch(updateModel(model)),
    setActiveModel: (id) => dispatch(setActiveModel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelDetailContainer);




