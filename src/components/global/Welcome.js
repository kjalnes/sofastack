import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {showBubble: false}
        this.clickLogin = this.clickLogin.bind(this);
        this.clickStart = this.clickStart.bind(this);
    }

    clickLogin() {
        localStorage.setItem('showSidear', 'true');
        window.location = '/auth/github';
    }

    clickStart() {
        this.setState({ showBubble: !this.state.showBubble });
        this.props.toggleSidebar();
        localStorage.setItem('showSidear', 'false');
    }

    render() {
        return (
            <div>
                {
                    this.state.showBubble ?
                    <div className='speech-bubble'>
                        <div className='bubble-text'>
                            Hello!
                            Let us help you create your Javascript CRUD node app skeleton. We provide tooltips to help you understand what is generated. When you are done we will deploy the generated code to your GitHub.
                        </div>
                    </div>
                    : null
                }
                <div id="home-img">
                    <p id="home-txt">Cushioning for the lazy developer</p>

                    {
                        localStorage.getItem('showSidear') === 'true' ?
                        <button onClick={ ()=> this.clickStart()} id="home-start">Start</button> :
                        <button onClick={ ()=> this.clickLogin()} id="home-start">Login</button>}
                </div>
            </div>
        )
    };
};

export default Welcome;
