import * as types from './types';
import { start, success, fail } from 'util/reduxStatus';

const initialState = {
    loaded: false,
    pfp: null,
    customImage: null
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case start(types.getPFP): {
            return state
        }
        case success(types.getPFP): {
            const { url } = data;
            return {
                ...state,
                loaded: true,
                pfp: url,
                customImage: null
            }
        }
        case fail(types.getPFP): {
            return {
                ...state,
                loaded: true,
                pfp: null
            }
        }    
        case start(types.selectImage): {
            return state;
        }
        case success(types.selectImage): {
            const { dataUrl } = data;
            return {
                ...state,
                loaded: true,
                customImage: dataUrl
            }
        }
        case fail(types.selectImage): {
            return {
                ...state,
                loaded: true,
                pfp: null,
                customImage: null
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;