import {
    ARTICLE,
    ARTICLE_CATALOG,
    AVAILABLE_SIZES,
    AVAILABLE_COLORS,
    AVAILABLE_MIN_PRICE,
    AVAILABLE_MAX_PRICE
} from '../constants';

export function getArticle(payload) {
    return {
        type: ARTICLE,
        payload
    };
}

export function storeCatalogArticle(payload) {
    return {
        type: ARTICLE_CATALOG,
        payload
    };
}

export function availableSizes(payload) {
    return {
        type: AVAILABLE_SIZES,
        payload
    };
}

export function availableColors(payload) {
    return {
        type: AVAILABLE_COLORS,
        payload
    };
}

export function availableMinPrice(payload) {
    return {
        type: AVAILABLE_MIN_PRICE,
        payload
    };
}

export function availableMaxPrice(payload) {
    return {
        type: AVAILABLE_MAX_PRICE,
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
        case ARTICLE_CATALOG:
            return {
                ...state,
                articleCatalog: action.payload
            };
        case AVAILABLE_SIZES:
            return {
                ...state,
                availableSizes: action.payload
            };
        case AVAILABLE_COLORS:
            return {
                ...state,
                availableColors: action.payload
            };
        case AVAILABLE_MIN_PRICE:
            return {
                ...state,
                availablePrice: {
                    ...state.availablePrice,
                    min: action.payload

                }
            };
        case AVAILABLE_MAX_PRICE:
            return {
                ...state,
                availablePrice: {
                    ...state.availablePrice,
                    max: action.payload

                }
            };
        default:
            return state;
    }
}
