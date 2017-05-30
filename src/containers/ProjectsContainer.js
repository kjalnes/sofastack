import React from 'react';
import ProjectForm from '../components/Projects';
import ModelsList from '../components/Projects/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName } from '../actions/project';

const ProjectContainer = (props) => {
    return (
        <div>
            <div className='row'>
                <div className='well project-details center-block'>
                    <ProjectForm
                        models={props.models}
                        saveProject={ props.saveProject }
                        name={props.name} />
                    <ModelsList models={props.models} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        models:state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveProject: (project)=> dispatch(saveProjectName(project))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
