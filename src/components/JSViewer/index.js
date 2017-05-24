import React, { Component } from 'react';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';
import sequelizeGenerator from '../../../shared/codeGenrators/sequelizeGenrator';
import expressRouteGenerator from '../../../shared/codeGenrators/expressRouteGenrator';

class JSViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { view: 'models' }
        this.editor = null;
        this.element = null;
        this.generateCode = this.generateCode.bind(this);
        this.generateOutput = this.generateOutput.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    generateCode(fn, models) {
        return models.map( model => fn(model)).join(`\n`);
    }

    generateOutput(models, view) {
        let code;
        if(view === 'models') {
            code = this.generateCode(sequelizeGenerator, models);
        } else {
            code = this.generateCode(expressRouteGenerator, models);
        }
        this.editor.setValue(code);
    }

    onClick(view, ev) {
        this.setState({view});
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

        this.generateOutput(this.props.models, this.state.view);
    }

    //will need to change to check uuid. Might need to research didUpdate vs will
    componentWillUpdate(nextProps, nextState) {
        if(nextProps.models !== this.props.models || nextState.view !== this.state.view) {
            this.generateOutput(nextProps.models, nextState.view);
        }
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    render() {

        return (
            <div className='col-xs-6 box'>
                <h3>JavaScript</h3>
                <ul className="nav nav-tabs">
                  <li onClick={ this.onClick.bind(null, 'model')} className="active"><a href="#">Model</a></li>
                  <li onClick={ this.onClick.bind(null, 'routes')} className=''><a href="#">Routes</a></li>
                </ul>
                <div ref={(el) => {this.element = el;}}></div>

            </div>
        )
    }
}

export default JSViewer;

