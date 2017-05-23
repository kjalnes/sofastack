import React, { Component } from 'react';

const dummyModel = `const User = sequelize.define('user', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
});`

class JSONViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { code: dummyModel }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        // manage changing state
    }

    render(){
        return (
            <div className='col-xs-6'>
                <h3>JSON Viewer</h3>
                <div>
                </div>
            </div>
        )
    }
}

export default JSONViewer;

