import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterWrapper from '../FilterWrapper'
import FilterNav from '../FilterNav'
import LayoutToggle from '../LayoutToggle'
import './style.scss';

export default class CatalogNav extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        catalogLayout: PropTypes.string.isRequired
    };

    render() {

        const {
            catalogLayout,
            actions: {
                setCatalogLayout
                }
            } = this.props;

        return (
            <div className="catalogNav">
                <FilterWrapper/>
                <LayoutToggle setCatalogLayout={setCatalogLayout} catalogLayout={catalogLayout}/>
                <FilterNav/>
            </div>
        )
    }
}