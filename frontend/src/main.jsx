import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const pendingRoute = new URLSearchParams(window.location.search).get('spa')

if (pendingRoute && pendingRoute.startsWith('/')) {
  window.history.replaceState(null, '', pendingRoute)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
