import React from 'react';
import Button from './Button';

const CustomImageButton = ({ selected = false, selectImage }) => (
    <Button text={(selected === true) ? 'Upload a new custom picture' : 'Upload a custom picture'} onClick={selectImage} className="button-custom" />
)

export default CustomImageButton;