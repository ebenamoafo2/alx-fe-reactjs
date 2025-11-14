import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx' 
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Contact from "./components/Contact.jsx"
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {path: '/about', element: <About /> },
  {path: '/services', element: <Services /> },
  {path: '/contact', element: <Contact /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
