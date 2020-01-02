import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getKey } from '../../common/helper';
import productImage from '../../static/images/image.png';
import './style.scss';

export default
class ArticleItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        catalogLayout: PropTypes.string.isRequired
    };

    render() {
        const { item, catalogLayout } = this.props;
        return (
            <article className={`articleItem articleItem--${catalogLayout}`} key={item.id}>
                <img alt={item.name} className={`articleItem__image articleItem__image--${catalogLayout}`}
                     src={productImage}/>

                <div className={`articleItem__props articleItem__props--${catalogLayout}`}>
                    <h4 className="articleItem__name">{item.name}</h4>
                    <h5 className="articleItem__headline">available sizes</h5>

                    <div className={`articleItem__list articleItem__list--${catalogLayout}`}>
                        {item.sizes.map((size) => {
                            return <div key={getKey()} className="articleItem__listItem">{size}</div>
                        })}
                    </div>
                    <h5 className="articleItem__headline">available colors</h5>

                    <div className={`articleItem__list articleItem__list--${catalogLayout}`}>
                        {item.colors.map((color) => {
                            return <div key={getKey()} className="articleItem__listItem">{color}</div>
                        })}
                    </div>
                    <p className="articleItem__infoText">{item.productInfo}</p>
                    <span className={`articleItem__price articleItem__price--${catalogLayout}`}>
                        {(Math.round(item.price)).toFixed(2)}€
                    </span>
                </div>
            </article>
        )
    }
}