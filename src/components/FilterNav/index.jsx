import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import Isvg from 'react-inlinesvg';
import ResetBtn from '../ResetBtn';
import iconDelete from '../../static/images/delete.svg';
import './style.scss';

export class FilterNav extends Component {

    render() {

        const {
            filter: {
                sizes,
                colors,
                priceMin,
                priceMax
                },
            data: {availablePrice},
            actions: {
                sizeFilter,
                colorFilter,
                minPriceFilter,
                maxPriceFilter,
                resetFilter
                }
            } = this.props;
        let resetShow = (colors.length > 0) || (sizes.length > 0) || (priceMin !== availablePrice.min) || (priceMax !== availablePrice.max) ? true : false;

        return (
            <div className="filterNav">
                {resetShow && <ResetBtn resetFilter={resetFilter}/>}
                {sizes.length > 0 && sizes.map((size) => {
                    return (
                        <span className="filterNav__btn" key={size} onClick={() => sizeFilter(size)}>
                            {size}
                            <Isvg src={iconDelete}/>
                        </span>
                    )
                })}
                {colors.length > 0 && colors.map((color) => {
                    return (
                        <span className="filterNav__btn" key={color} onClick={() => colorFilter(color)}>
                            {color}
                            <Isvg src={iconDelete}/>
                        </span>
                    )
                })}
                {priceMin !== availablePrice.min && (
                    <span onClick={() => minPriceFilter(availablePrice.min)} className="filterNav__btn">
                        min price: {priceMin}
                        <Isvg src={iconDelete}/>
                    </span>
                )}
                {priceMax !== availablePrice.max && (
                    <span onClick={() => maxPriceFilter(availablePrice.max)} className="filterNav__btn">
                        max price: {priceMax}
                        <Isvg src={iconDelete}/>
                    </span>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter,
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterNav);
