import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
          {
              path: '/',
              element: <Home />,
          },
          {
              path: '/about',
              element: <About />,
          },

      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
        <App />
    </RouterProvider>
)
