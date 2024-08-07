import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './redux/store.tsx'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
