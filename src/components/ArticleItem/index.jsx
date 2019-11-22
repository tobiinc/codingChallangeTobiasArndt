import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class ArticleItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired
    };

    render() {
        const { item } = this.props;

        return (
            <a className="articleItem" key={item.id} href={`http://flaconi.de/${item.slug}`}>
                <img alt={item.name} className="articleItem__image" src={item.image}/>
                <span className="articleItem__price">{(Math.round(item.price) / 100).toFixed(2)}</span>
                <span className="articleItem__brand">{item.brand}</span>
                <span className="articleItem__name">{item.name}</span>
                <span className="articleItem__size">{item.size}</span>
            </a>
        )
    }
}