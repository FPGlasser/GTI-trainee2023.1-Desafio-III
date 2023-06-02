import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout,Home, About, Store, Contact, Products, ApiError  } from "../Pages";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
   
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/loja',
        element: <Store />,
        children: [
          {
            path: '/loja',
            element: <Products/>,
          },        
        ]
      },
    
      {
        path: 'sobre',
        element: <About />,
      },

      {
        path: 'contacto',
        element: <Contact />,
      },

      {
        path: '/error',
        element: <ApiError />
      }
    ],
  },


])

export const AppRoutes = () => <RouterProvider router={routes} />
