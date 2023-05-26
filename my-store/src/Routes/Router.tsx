import React, { Children } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layout, Home, Store, Contact } from '../Pages'


export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: 'loja',
        element: <Store />,
        children: []
      },

      {
        path: 'contacto',
        element: <Contact />
      }
    ]

  }
])