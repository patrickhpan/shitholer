import React from 'react';

class App extends React.Component {
    render() {
        const { children } = this.props;
        return <div id="App">
            { children }
            <input id="file-selector" type="file" accept=".jpg,.jpeg,.png" />
        </div>
    }
}

export default App;