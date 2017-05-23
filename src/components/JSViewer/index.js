import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';

class JSViewer extends Component {
    constructor(props) {
        super(props);
        this.editor = null;
        this.element = null;
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
        this.editor = ace.edit(this.element);
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setTheme('ace/theme/solarized_light');
        this.editor.setOptions({
            readOnly: true,
            hScrollBarAlwaysVisible: true,
            vScrollBarAlwaysVisible: true,
            minLines: 19,
            maxLines: 20
        });

        this.generateOutput(this.props.models);
    }

    //will need to change to check uuid. Might need to research didUpdate vs will
    componentWillUpdate(nextProps) {
        if(nextProps.models !== this.props.models) {
            this.generateOutput(nextProps.models);
        }
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {
        return (
            <div className='col-xs-6 box'>
                <h3>JavaScript</h3>
                <div ref={(el) => {this.element = el;}}></div>
            </div>
        )
    }
}

export default JSViewer;

