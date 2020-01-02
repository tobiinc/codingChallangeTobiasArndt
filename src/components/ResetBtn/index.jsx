import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import Isvg from 'react-inlinesvg';
import iconDelete from '../../static/images/delete.svg';
import './style.scss';

export class ResetBtn extends Component {

    render() {
        const {
            data: {
                availablePrice
                },
            actions: {
                resetFilter
                }
            } = this.props;
        return <Isvg className="resetBtn" onClick={() => resetFilter(availablePrice)} src={iconDelete}/>
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetBtn);
