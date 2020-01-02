import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Isvg from 'react-inlinesvg';
import * as actions from '../../../redux/actions';
import { getKey } from '../../../common/helper';
import iconCheck from '../../../static/images/check.svg';
import './style.scss';

export class Filter extends Component {
    static propTypes = {
        filterAction: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        available: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    onClick = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {

        const {
            type,
            label,
            filterAction,
            data: { isPending },
            filter,
            available
            } = this.props;

        return (
            <div className={this.state.isOpen ? 'filter filter--open' :  'filter'}>
                <label onClick={this.onClick}
                       className={this.state.isOpen ? 'filter__label filter__label--open' :  'filter__label'}>
                    {label}
                    <Isvg src={iconCheck}/>
                </label>
                <ul className={this.state.isOpen ? 'filter__list filter__list--open' :  'filter__list'}>
                    {isPending && available.map((value) => {
                        return (
                            <li key={getKey()}>
                                <label className="filter__item" htmlFor={value}>
                                    <input
                                        id={value}
                                        type="checkbox"
                                        onChange={e => filterAction(e.target.value)}
                                        value={value}
                                        checked={filter[type].includes(value)}
                                        />
                                    {value}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
