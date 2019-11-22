import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import formData from './data';
import ArticleItem from '../ArticleItem/';
import Header from '../Header/';
import CatalogNav from '../CatalogNav/';
import './style.scss';

export class Catalog extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            catalog: null
        };
    }

    componentDidMount() {
        const { actions: { getArticle, catalogArticle } } = this.props;
        const catalogData = formData.getData();
        getArticle(catalogData);
        catalogArticle(catalogData);
    }

    componentWillReceiveProps(nextProps) {
        const {
            data: { articles, articleOrder, articleCatalog, isPending },
            actions: { catalogArticle },
            } = this.props;

        console.log('isPending', isPending);
        console.log('articleOrder', articleOrder);
        console.log('articleCatalog new', nextProps.data.articleOrder);
        if (nextProps.data.articleOrder !== articleOrder) {
            if (nextProps.data.articleOrder === 'price') {
                catalogArticle(articleCatalog.sort((a, b) => a.price - b.price));
            }
            if (nextProps.data.articleOrder === 'default') {
                catalogArticle(articles);
            }
        }
    }

    render() {
        const {
            data: {
                articleCatalog,
                isPending
                },
            } = this.props;

        return (
            <div className="catalog">
                <Header/>
                <CatalogNav actions={this.props.actions.filterArticle}/>
                <div className="catalog__wrapper">
                    {isPending && articleCatalog.map((item) => (
                        <ArticleItem item={item} />
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
