import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../redux/actions';
import Isvg from 'react-inlinesvg';
import iconCheck from '../../../static/images/check.svg';
import './style.scss';

export class PriceFilter extends Component {

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
            data: { availablePrice },
            filter: { priceMin, priceMax },
            actions: { minPriceFilter, maxPriceFilter }
            } = this.props;

        return (
            <div className="filter">
                <label
                    onClick={this.onClick}
                    className={this.state.isOpen ? 'filter__label filter__label--open' :  'filter__label'}
                    >
                    choose price
                    <Isvg src={iconCheck}/>
                </label>

                <div className={this.state.isOpen ? 'filter__list filter__list--open' :  'filter__list'}>
                    <div className="filter__sliderWrapper">
                        <label className="filter__sliderLabel">MIN</label>
                        <input
                            className="filter__slider"
                            onChange={e => minPriceFilter(e.target.value)}
                            type="range"
                            min={availablePrice.min}
                            max={priceMax}
                            value={priceMin != null ? priceMin : ''}
                            />

                        <div className="filter__output">{priceMin}&euro;</div>
                    </div>
                    <div className="filter__sliderWrapper">
                        <label className="filter__sliderLabel">MAX</label>
                        <input
                            className="filter__slider"
                            onChange={e => maxPriceFilter(e.target.value)}
                            type="range"
                            min={priceMin}
                            max={availablePrice.max}
                            value={priceMax != null ? priceMax : ''}
                            />

                        <div className="filter__output">{priceMax}&euro;</div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);
