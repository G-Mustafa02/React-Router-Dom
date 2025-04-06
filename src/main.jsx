import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Services from './screens/Services'
import Layout from './Layout'
import Product from './screens/Product'
import SingleProduct from './screens/SingleProduct'


const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
  {
    path: "services",
    element: <Services/>
  },
  {
    path: 'product',
    element: <Product/>
  },
  {
    path: 'product/:id',
    element: <SingleProduct/>
  },
  {
    path:'*',
    element: <Home/>
  }
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
