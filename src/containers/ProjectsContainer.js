import React from 'react';
import ProjectForm from '../components/Projects';
import ModelsList from '../components/Projects/ModelsList';
import { connect } from 'react-redux';
import { saveProjectName } from '../actions/project';

const ProjectContainer = (props) => {
    return (
        <div>
            <div className='row'>
                <div className='project-name'>
                    <ProjectForm
                        models={props.models}
                        saveProject={ props.saveProject }
                        project={props.project} />
                    <ModelsList models={props.models} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
        models:state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveProject: (project)=> dispatch(saveProjectName(project))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
