import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FormContextProvider } from './Context/FormContext'
import './index.css'
import { store } from './Redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormContextProvider>
      <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ReduxProvider>
    </FormContextProvider>
  </React.StrictMode>
)
