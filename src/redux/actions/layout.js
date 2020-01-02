import { CATALOG_LAYOUT } from '../constants';

export function setCatalogLayout(payload) {
    return {
        type: CATALOG_LAYOUT,
        payload
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case CATALOG_LAYOUT:
            return {
                ...state,
                catalogLayout: action.payload
            };
        default:
            return state;
    }
}
