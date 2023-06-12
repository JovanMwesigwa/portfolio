import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Work from './Work.jsx'
import Tutorials from './Tutorials.jsx'
import Articles from './Articles.jsx'
import Projects from './Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello world!</div>,
    element: <App />,
  },
  {
    path: '/work',
    element: <Work />,
  },
  {
    path: '/tutorials',
    element: <Tutorials />,
  },
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
