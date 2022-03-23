import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './app/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
reportWebVitals();