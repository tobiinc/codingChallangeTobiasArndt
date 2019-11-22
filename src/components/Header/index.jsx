import React, { Component } from 'react';
import './style.scss';

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <a href="/" className="header__logo">
                    <img alt="Flaconi" src="https://cdn.flaconi.de/themes/flaconi/assets/20191119152641/images/svg/flaconi-logo.svg"/>
                </a>
            </div>
        )
    }
}