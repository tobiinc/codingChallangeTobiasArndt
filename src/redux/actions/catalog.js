// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { ARTICLE, ARTICLE_FILTER, ARTICLE_CATALOG } from '../constants';

export function getArticle(payload) {
    return {
        type: ARTICLE,
        payload
    };
}

export function filterArticle(payload) {
    return {
        type: ARTICLE_FILTER,
        payload
    };
}

export function catalogArticle(payload) {
    return {
        type: ARTICLE_CATALOG,
        payload
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case ARTICLE:
            return {
                ...state,
                articles: [...action.payload],
                isPending: true
            };
        case ARTICLE_FILTER:
            console.log('payload', action.payload);
            return {
                ...state,
                articleOrder: action.payload
            };
        case ARTICLE_CATALOG:
            return {
                ...state,
                articleCatalog: action.payload
            };
        default:
            return state;
    }
}
