import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import Isvg from 'react-inlinesvg';
import Filter from './Filter';
import PriceFilter from './PriceFilter';
import iconMenu from '../../static/images/menu.svg';
import iconMenuOpen from '../../static/images/close.svg';
import './style.scss';


export class FilterWrapper extends Component {

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

    componentDidUpdate(nextProps) {
        const {
            filter,
            data: { articles, isPending },
            actions: { storeCatalogArticle },
            } = this.props;
        const { filter: nextFilter } = nextProps;

        if (isPending && nextFilter !== this.props.filter) {
            const filterArray = (array, filters) => {
                const filterKeys = Object.keys(filters);
                return array.filter(item => {
                    return filterKeys.every(key => {
                        if (typeof rules[key] !== 'function') return true;
                        return rules[key](item[key]);
                    });
                });
            };

            const rules = {
                sizes: filter.sizes.length > 0 ? sizes => sizes.find(size => filter.sizes.includes(size)) : null,
                colors: filter.colors.length > 0 ? colors => colors.find(color => filter.colors.includes(color)) : null
            };

            let filtered = articles;
            filtered = filtered.filter((item) => +parseInt(item.price, 10) >= filter.priceMin);
            filtered = filtered.filter((item) => +parseInt(item.price, 10) <= filter.priceMax);
            filtered = filterArray(filtered, rules);
            storeCatalogArticle(filtered);
        }
    }

    render() {

        const {
            data: { availableSizes, availableColors },
            actions: { sizeFilter, colorFilter },
            } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="filters">
                <Isvg
                    src={isOpen ? iconMenuOpen : iconMenu}
                    onClick={this.onClick}
                    className={isOpen ? 'filters__button filters__button--open' :  'filters__button'}
                    />
                <div className={isOpen ? 'filters__wrapper filters__wrapper--open' :  'filters__wrapper'}>
                    <Filter
                        type="sizes"
                        label="choose size"
                        available={availableSizes}
                        filterAction={sizeFilter}
                        />
                    <Filter
                        type="colors"
                        label="choose color"
                        available={availableColors}
                        filterAction={colorFilter}
                        />
                    <PriceFilter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper);
