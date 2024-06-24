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
import Doctors from './components/Doctors/Doctors.jsx';
import SlidingForm from './components/Sliding form/SlidingForm.jsx';
import DoctorDetails from './components/DoctorDetails/DoctorDetails.jsx';

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
          {
              path: '/doctors',
              element: <Doctors />,
          },
          {
              path: '/slidingForm',
              element: <SlidingForm />,
          },
          {
              path: '/doctor-details',
              element: <DoctorDetails />,
          },

      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
        <App />
    </RouterProvider>
)
