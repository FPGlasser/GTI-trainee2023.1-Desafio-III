import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout, Home, About, Store, Page404 } from '../Pages'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: 'loja',
        element: <Store />

        // loader: StoreLoader
      },
      {
        path: '*',
        element: <Page404 />
      }
    ]
  }
])

export const AppRouter = () => (
  <RouterProvider router={Router} />
)
