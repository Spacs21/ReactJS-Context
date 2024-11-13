// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StateProvider } from './context/index.jsx'
import { initialState, reducer } from './context/reducer.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
  /* </StrictMode>, */
)
