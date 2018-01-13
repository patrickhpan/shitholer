import * as types from './types';
import { wrapAction } from 'util/reduxStatus'

const getPFP = wrapAction((url) => ({
    type: types.getPFP,
    data: {
        url
    }
}))

const selectImage = wrapAction((dataUrl) => ({
    type: types.selectImage,
    data: {
        dataUrl
    }
}))

export {
    getPFP,
    selectImage
}