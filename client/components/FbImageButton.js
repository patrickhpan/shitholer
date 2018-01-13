import React from 'react';
import Button from './Button';

const attemptPFP = (getPFP = Promise.resolve()) => () => {
    getPFP().then(result => {
        if (result !== true) {
            window.location.href = "/auth/fb"
        }
    })
}

const FbImageButton = ({ selected = false, getPFP }) => (selected === true) ?
    <Button text='Imported Facebook profile picture!' disabled className="button-fb" /> :
    <Button text='Import Facebook profile picture' onClick={attemptPFP(getPFP)} className="button-fb" />
    
export default FbImageButton;