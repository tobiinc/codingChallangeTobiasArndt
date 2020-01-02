import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import iconDelete from '../../static/images/delete.svg';
import './style.scss';

export default
class ResetBtn extends Component {
    static propTypes = {
        resetFilter: PropTypes.func.isRequired
    };

    render() {
        return <Isvg className="resetBtn" onClick={this.props.resetFilter} src={iconDelete}/>
    }
}