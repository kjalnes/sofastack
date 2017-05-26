import React from 'react';
import ProjectForm from '../components/Projects';
import { connect } from 'react-redux';
import { saveProjectName } from '../actions/project';

const ProjectContainer = (props) => {
    console.log('from ProjectContainer',props.projects)
    return (
        <div>
            <div className='col-xs-6 box'>
                <ProjectForm models={props.models} saveProject={ props.saveProject } projects={props.projects} />
            </div>           
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        models:state.models
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveProject: (project)=> dispatch(saveProjectName(project))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
