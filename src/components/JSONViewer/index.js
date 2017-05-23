import React, { Component } from 'react';


class JSONViewer extends Component {
    constructor(props) {
        super(props);
        this.editor = null;
        this.generateJSON = this.generateJSON.bind(this);
    }

    componentDidMount() {
        var container = document.getElementById("jsoneditor");
        var options = { mode: 'tree' };
        this.editor = new JSONEditor(container, options);
        if(this.props.models) {
            this.generateJSON(this.props.models);
        }
    }

    generateJSON(models) {
        // console.log('models', models)
        // var json = JSON.stringify(models[0]);
        this.editor.set(models[0]);
        var json = this.editor.get();
    }

    componentWillUpdate(nextProps) {
        if(nextProps.models !== this.props.models) {
            this.generateJSON(nextProps.models);
        }
    }

    render(){
        return (
            <div className='col-xs-6 box'>
                <h3>JSON</h3>
                <div id="jsoneditor"></div>
            </div>
        )
    }
}

export default JSONViewer;


