import {
    SIZE_FILTER,
    COLOR_FILTER,
    MIN_PRICE_FILTER,
    MAX_PRICE_FILTER,
    RESET_FILTER
} from '../constants';

export function sizeFilter(payload) {
    return {
        type: SIZE_FILTER,
        payload
    };
}

export function colorFilter(payload) {
    return {
        type: COLOR_FILTER,
        payload
    };
}

export function minPriceFilter(payload) {
    return {
        type: MIN_PRICE_FILTER,
        payload
    };
}

export function maxPriceFilter(payload) {
    return {
        type: MAX_PRICE_FILTER,
        payload
    };
}


export function resetFilter(payload) {
    return {
        type: RESET_FILTER,
        payload
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case SIZE_FILTER:
            let sizes = [...state.sizes];
            if (sizes.includes(action.payload)) {
                sizes.splice(sizes.indexOf(action.payload), 1);
            } else {
                sizes = sizes.concat([action.payload]);
            }
            return {
                ...state,
                sizes: sizes
            };
        case COLOR_FILTER:
            let colors = [...state.colors];
            if (colors.includes(action.payload)) {
                colors.splice(colors.indexOf(action.payload), 1);
            } else {
                colors = colors.concat([action.payload]);
            }
            return {
                ...state,
                colors
            };
        case MIN_PRICE_FILTER:
            return {
                ...state,
                priceMin: parseInt(action.payload, 10)
            };
        case MAX_PRICE_FILTER:
            return {
                ...state,
                priceMax: parseInt(action.payload, 10)
            };
        case RESET_FILTER:
            return {
                sizes: [],
                colors: [],
                priceMin: action.payload.min,
                priceMax: action.payload.max
            };
        default:
            return state;
    }
}
