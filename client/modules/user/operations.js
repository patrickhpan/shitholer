import axios from 'axios';
import * as actions from './actions';
import isValidImage from 'util/isValidImage';

const getPFP = () => dispatch => {
    dispatch(actions.getPFP.start())
    return axios('/fb/picture')
        .then(response => response.data)
        .then(data => {
            const { authenticated, url } = data;
            if (authenticated === false) {
                dispatch(actions.getPFP.fail(new Error('Not authenticated.')))
                return;
            } 

            dispatch(actions.getPFP.success(url))
            return true;
        })
        .catch(error => {
            dispatch(actions.getPFP.fail(error))
        })
}

const selectImage = () => dispatch => {
    dispatch(actions.selectImage.start())
    const fileInput = document.getElementById("file-selector")
    const fileCB = () => {
        const { files } = fileInput;
        if (files.length !== 1) {
            fileInput.removeEventListener('change', fileCB)
            dispatch(actions.selectImage.fail())
            return;
        } 
        const file = files[0]
        if (isValidImage(file.type) !== true) {
            fileInput.removeEventListener('change', fileCB)
            dispatch(actions.selectImage.fail())
            return;
        }
    
        const reader = new FileReader();
        reader.onload = ({ target }) => {
            fileInput.removeEventListener('change', fileCB)
            const { result } = target;
            dispatch(actions.selectImage.success(result))
        }
        reader.readAsDataURL(file)
    }
    fileInput.addEventListener('change', fileCB)
    fileInput.click()
}

export {
    getPFP,
    selectImage
}