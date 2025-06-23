import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BirthdayApp from "./BirthdayApp";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <BirthdayApp /> */}
   <App/>
  </StrictMode>,
)
