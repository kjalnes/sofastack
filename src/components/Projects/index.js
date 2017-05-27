import React, { Component } from 'react';
import {Link} from 'react-router';
import ModelsList from './ModelsList';
// import ModelName from './ModelName';
// import ModelLabels from './ModelLabels';
import uuidV4 from 'uuid/v4';

class ProjectForm extends Component {
    constructor(props) {
        console.log('projects from ProjectForm',props)
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
        console.log(ev.target.value)
        this.setState({ name : ev.target.value });
    }

    toggleShowName() {
        this.setState({ showModelName: !this.state.showModelName });
    }

    // save model to redux store
    saveProject() {
        const { name} = this.state;
        const id = uuidV4();
        const project = { name,id};
        this.props.saveProject(project);
        this.setState(this.getDefaultState()); // reset
    }

    render() {
        return (
            <div className='col-xs-6 box'>
                <h3>Create New Project</h3>
                <div className='model-form'>
                    <div className='row'>
                    <input onChange={this.onChange}/>
                    <button onClick={this.saveProject} className='btn btn-default pull-right project-save-btn'>Save Project</button>
                    </div>
                    <div className='row'>
                    {
                        this.props.projects[0] ? <div><span> {this.props.projects[0].name } </span> 
                        <button className='btn btn-default pull-right project-edit-btn'>Edit</button> </div>: null
                    }
                    </div>
                    <div>
                        { this.props.models ? this.props.models.map( (model, index) => <li key={index}>{model.name}</li>) : null }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectForm;
