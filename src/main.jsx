import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,

    children : [
      {
        path : 'about',
        element : <About></About>
      },
      {
        path : 'contact',
        element : <Contact></Contact>
      },
      {
        path : 'friends',
        element : <Friends></Friends>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path : 'friend/:friendId',
        element : <FriendsDetails></FriendsDetails>,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
