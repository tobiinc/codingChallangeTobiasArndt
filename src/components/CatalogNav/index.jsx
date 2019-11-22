import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default
class CatalogNav extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="catalogNav">
                <select onChange={e => this.props.actions(e.target.value)}>
                    <option value="default">bitte wählen</option>
                    <option value="price">Preis</option>
                </select>
            </div>
        )
    }
}