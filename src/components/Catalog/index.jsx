import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import { getKey, flatten } from '../../common/helper';
import formData from './data';
import ArticleItem from '../ArticleItem/';
import CatalogNav from '../CatalogNav/';
import './style.scss';

export class Catalog extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    componentDidMount() {
        const {
            actions: {
                getArticle,
                storeCatalogArticle,
                availableSizes,
                availableColors,
                availableMaxPrice,
                availableMinPrice,
                minPriceFilter,
                maxPriceFilter
                },
            } = this.props;
        const catalogData = formData.getData();
        getArticle(catalogData);
        storeCatalogArticle(catalogData);

        let getSizes = [catalogData.map((item) => item.sizes.map((size) => size))];
        getSizes = flatten(getSizes);
        getSizes = Array.from(getSizes);
        getSizes = getSizes.filter((item, pos) => {
            return getSizes.indexOf(item) === pos;
        });
        availableSizes(getSizes);

        let getColors = [catalogData.map((item) => item.colors.map((size) => size))];
        getColors = flatten(getColors);
        getColors = Array.from(getColors);
        getColors = getColors.filter((item, pos) => {
            return getColors.indexOf(item) === pos;
        });
        availableColors(getColors);

        let getPrice = catalogData.map((item) => item.price);
        getPrice = getPrice.filter((item, pos) => {
            return getPrice.indexOf(item) === pos;
        });
        getPrice = getPrice.map((item) => {
            return parseInt(item, 10);
        });

        availableMaxPrice(Math.max(...getPrice));
        availableMinPrice(Math.min(...getPrice));
        maxPriceFilter(Math.max(...getPrice));
        minPriceFilter(Math.min(...getPrice));
    }

    render() {
        const {
            data: {
                articleCatalog,
                isPending,
                catalogLayout,
                filter
                },
            } = this.props;

        return (
            <div className={`catalog catalog--${catalogLayout}`}>
                <CatalogNav
                    actions={this.props.actions}
                    catalogLayout={catalogLayout}
                    />

                <div className="catalog__wrapper">
                    {isPending && articleCatalog.map((item) => (
                        <ArticleItem
                            filter={filter}
                            key={getKey()}
                            item={item}
                            catalogLayout={catalogLayout}
                            />
                    ))}
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
