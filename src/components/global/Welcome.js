import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {showBubble: false}
        this.clickLogin = this.clickLogin.bind(this);
        this.clickStart = this.clickStart.bind(this);
    }

    clickLogin() {
        localStorage.setItem('showSidear', 'false');
        localStorage.setItem('showStartBtn', 'true');
        window.location = '/auth/github';
    }

    clickStart() {
        this.setState({ showBubble: !this.state.showBubble });
        this.props.toggleSidebar();
        localStorage.setItem('showStartBtn', 'false');
        localStorage.setItem('showSidear', 'false');
    }

    render() {
        console.log(localStorage.getItem('showSidear'))
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
                    <p id="home-txt">Get Comfy With <br /> SofaStack</p>

                    {
                        localStorage.getItem('showSidear') === 'false' ?
                            localStorage.getItem('showStartBtn') === 'true' ?
                            <button onClick={ ()=> this.clickStart()} id="home-start">Start</button>
                             :
                            null
                        :
                        <button onClick={ ()=> this.clickLogin()} id="home-start">Login</button>
                    }

                    {
                        !this.state.showBubble ?

                        <div id = "bubble-img">
                            <img src="../../assets/images/20.svg" id="s"></img>
                            <img src="../../assets/images/50.svg" id="m"></img>
                            <img src="../../assets/images/cloud.svg" id="l"></img>
                            <p id="bub-txt">Cushioning for the lazy developer</p>
                        </div> :
                        null
                    }


                </div>
            </div>
        )
    };
};

export default Welcome;
