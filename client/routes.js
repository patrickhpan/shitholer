import React from 'react';
import { Route } from 'react-router-dom';
import keyify from 'util/keyify'

import App from 'containers/App';
import Landing from 'containers/Landing';

const routes = [
    <Route exact path="/" component={Landing} />
]

export default keyify(routes)