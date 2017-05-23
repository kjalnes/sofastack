import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/clouds';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';

class JSViewer extends Component {
    constructor(props) {
        super(props);
        this.editor = null;
        this.generateCode = this.generateCode.bind(this);
        this.generateOutput = this.generateOutput.bind(this);
    }

    generateCode(fn, models) {
        return models.map( model => fn(model)).join(`\n`);
    }

    generateOutput(models) {
        const sequelizeCode = this.generateCode(sequelizeGenerator, models);
        const expressCode = this.generateCode(expressRouteGenerator, models);
        this.editor.setValue(sequelizeCode + `\n\n` + expressCode);
    }

    componentDidMount() {
        this.editor = ace.edit('JSviewer');
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setTheme('ace/theme/clouds');
        this.editor.setOptions({
            readOnly: true,
            hScrollBarAlwaysVisible: true,
            vScrollBarAlwaysVisible: true,
            minLines: 20,
            maxLines: 20
        });

        this.generateOutput(this.props.models);
    }

    componentWillUpdate(nextProps) {
        if(nextProps.models !== this.props.models) {
            this.generateOutput(nextProps.models);
        }
    }

    render() {
        return (
            <div className='col-xs-6'>
                <h3>JavaScript</h3>
                <div id='JSviewer'></div>
            </div>
        )
    }
}

export default JSViewer;

