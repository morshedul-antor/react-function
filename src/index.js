import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <GoogleOAuthProvider clientId="969931986795-07nha3qm9ig77bq00c2cj5nd81r8o5e7.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)
