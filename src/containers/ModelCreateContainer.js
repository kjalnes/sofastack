import React, { Component } from 'react';
import ModelForm from '../components/ModelForm/';
import JSViewer from '../components/JSViewer';
// import JSEditor from '../components/JSViewer/JSEditor';
// import JSONViewer from '../components/JSONViewer';
import { connect } from 'react-redux';
import { saveModel, updateModel } from '../actions/model';
import { setActiveModel } from '../actions/project';

class ModelCreateContainer extends Component {

    render() {
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
                                        <a data-toggle="collapse" href="#collapse1">Sequelize Model Form</a>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ModelForm
                                        model={null}
                                        saveModel={this.props.saveModel}
                                        updateModel={this.props.updateModel}
                                        setActiveModel={this.props.setActiveModel} />
                                    </div>
                                    <div className="panel-footer">Panel Footer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        models: state.models,
        active: state.active
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveModel: (model) => dispatch(saveModel(model)),
        updateModel: (model) => dispatch(updateModel(model)),
        setActiveModel: (id) => dispatch(setActiveModel(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelCreateContainer);
