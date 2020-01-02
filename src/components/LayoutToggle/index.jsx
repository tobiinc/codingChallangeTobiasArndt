import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import iconList from '../../static/images/layoutList.svg';
import iconTile from '../../static/images/layoutTile.svg';
import './style.scss';

export default
class LayoutToggle extends Component {
    static propTypes = {
        setCatalogLayout: PropTypes.func.isRequired,
        catalogLayout: PropTypes.string.isRequired
    };

    render() {

        const {
            catalogLayout,
            setCatalogLayout
            } = this.props;

        return (
            <div className="layoutToggle">
                <Isvg
                    className={catalogLayout === 'list' ? 'layoutToggle__button layoutToggle__button--active' : 'layoutToggle__button'}
                    onClick={(e) => setCatalogLayout('list')}
                    src={iconList}
                    />
                <Isvg
                    className={catalogLayout === 'tile' ? 'layoutToggle__button layoutToggle__button--active' : 'layoutToggle__button'}
                    onClick={(e) => setCatalogLayout('tile')}
                    src={iconTile}
                    />
            </div>
        )
    }
}