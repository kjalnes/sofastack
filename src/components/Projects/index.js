import React, { Component } from 'react';
import { Link } from 'react-router';
import ModelsList from './ModelsList';
// import ModelName from './ModelName';
// import ModelLabels from './ModelLabels';
import uuidV4 from 'uuid/v4';

class ProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state =  this.getDefaultState();
        // this.saveAttr = this.saveAttr.bind(this);
        // this.addNewAttr = this.addNewAttr.bind(this);
        // this.deleteAttr = this.deleteAttr.bind(this);
        this.saveProject = this.saveProject.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleShowName = this.toggleShowName.bind(this);
    }

    getDefaultState() {
        return {
            name: '',
            showBtn: false,
            showProjectName: false
        };
    }

    onChange(ev) {
        this.setState({ name : ev.target.value });
    }

    toggleShowName() {
        this.setState({ showProjectName: !this.state.showProjectName });
    }

    // save project to redux store
    saveProject() {
        const project = { name: this.state.name };
        this.props.saveProject(project);
        this.toggleShowName();
    }

    componentWillMount() {
        if(this.props.project.length) {
            const project = this.props.project[0]
            this.setState({ name: project.name });
            this.toggleShowName();
        }
    }

    render() {
        return (
            <div className='project-page'>
                <h3>Your Project</h3>
                <div className=''>
                    { this.state.showProjectName ?
                        <div>
                            <h4>{this.state.name }</h4>
                            <button onClick={this.toggleShowName} className='btn btn-default project-edit-btn'>Edit</button>
                        </div>
                        :
                        <div className=''>
                            <input onChange={this.onChange}/><br />
                            <button onClick={this.saveProject} className='btn btn-default project-save-btn'>Save</button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ProjectForm;

