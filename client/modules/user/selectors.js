const hasCustomImage = state => state.user.customImage !== null
const getCustomImage = state => state.user.customImage

const hasFbImage = state => state.user.pfp !== null
const getFbImage = state => state.user.pfp

const isLoaded = state => state.user.loaded === true

export {
    hasCustomImage,
    getCustomImage,
    hasFbImage,
    getFbImage,
    isLoaded
}