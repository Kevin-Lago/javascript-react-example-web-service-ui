import React, { Component } from 'react';
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../constants';
import './SciFiScreen.css';

const Screen = (i, title) => (
    <div key={'sci-fi-screen-' + i} className='sci-fi-screen' style={{ "--index": i }}>
        <div className='sci-fi-screen-internal'>
            <div className='sci-fi-screen-image'></div>
            <div className="sci-fi-screen-content flex-start-start">
                <div className='sci-fi-screen-title-wrapper flex-center-center' style={{ "--stacks": "3" }}>
                    <svg viewBox='0 0 64 64'>
                        <path d="M0 0 L16 16 L16 48 L0 64" />
                    </svg>
                    <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "0" }}>{title}</span>
                    <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "1" }}>{title}</span>
                    <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "2" }}>{title}</span>
                    <svg viewBox='0 0 64 64'>
                        <path d="M64 0 L48 16 L48 48 L64 64" />
                    </svg>
                </div>
                <div className='sci-fi-screen-login'>
                    <div className='sci-fi-screen-login-field-wrapper'>
                        <div className='sci-fi-screen-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                        </div>
                        <input placeholder="email" className='sci-fi-screen-login-field-input' type="text" />
                    </div>
                    <div className='sci-fi-screen-login-field-wrapper'>
                        <div className='sci-fi-screen-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
                        </div>
                        <input placeholder="password" className='sci-fi-screen-login-field-input' type="text" />
                    </div>
                    <div className='sci-fi-screen-login-button-wrapper'>
                        <button className='sci-fi-screen-login-login-button'>
                            Sign In
                        </button>
                    </div>
                    {/* <div className='sci-fi-screen-login-or-spacer'>

                    </div>
                    <div className='sci-fi-screen-login-button-wrapper'>
                        <button className='sci-fi-screen-login-signup-button'>
                            Sign Up
                        </button>
                    </div> */}
                </div>
                <div className='sci-fi-screen-login-options'>
                    <a className='sci-fi-screen-login-option' href={GITHUB_AUTH_URL}>
                        <div className='sci-fi-screen-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
                            </svg>
                        </div>
                        <div className='sci-screen-login-option-title'>
                            Continue with GitHub
                        </div>
                    </a>
                    <a className='sci-fi-screen-login-option' href={GOOGLE_AUTH_URL}>
                        <div className='sci-fi-screen-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </div>
                        <div className='sci-screen-login-option-title'>
                            Continue with Google
                        </div>
                    </a>
                </div>
            </div>
            <div className='sci-fi-screen-overlay'></div>
        </div>
    </div>
)

export default class SciFiScreen extends Component {
    constructor(props) {
        super(props);

        this.l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.letters = "abcdefghijklmnopqrstuvwxyz";
    }

    componentDidMount() {
        this.spans = document.querySelectorAll(".sci-fi-screen-title");

        let content = document.querySelectorAll(".sci-fi-screen-content");

        // for (let i = 1; i < content.length; i++) {
        //     content[i].style.display = "none"
        // }
    }

    handleMouseEnter() {
        let interval = null;
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            let innerText = this.spans[0].innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return this.spans[0].dataset.value[index];
                    }

                    return this.letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            for (let i = 0; i < this.spans.length; i++) {
                this.spans[i].innerText = innerText;
            }

            if (iteration >= this.spans[0].dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    render() {
        var screens = [];

        for (let i = 0; i < this.props.screenStack; i++) {
            screens.push(Screen(i, this.props.title))
        }

        return (
            <div className='sci-fi-screen-wrapper flex-center-center' style={{ "--stacks": this.props.screenStack }} onMouseEnter={(event) => this.handleMouseEnter(event)}>
                {screens.map(screen => screen)}
            </div>
        )
    }
}