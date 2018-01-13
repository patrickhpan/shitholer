import React from 'react';

import blankImg from 'assets/blank.png'
import exampleImg from 'assets/example.jpg'

const ExamplePicture = ({ blank }) => <div className="Picture">
    <img src={(blank === true) ? blankImg : exampleImg } />
</div>;

export default ExamplePicture;