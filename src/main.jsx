import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import SignIn from './views/Sessions/SignIn'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/about',
        element: <h1>About weffeeeeee efwfwfwfwqef wefwefwefwefwefwefwe</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
