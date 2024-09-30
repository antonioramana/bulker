import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router-dom'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ProductCategories from './pages/ProductCategories.jsx'
import CategoryProducts from './pages/CategoryProducts.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import Terms from './pages/Terms.jsx'

const router=createBrowserRouter([
  {
    path:  "/bulker/",
    element: <App />,
  },
  {
    path:  "/bulker/produtCategories",
    element: <ProductCategories />,
  },
  {
    path: "/bulker/categoryProducts/:cat", 
    element: <CategoryProducts />,
  },
  // {
  //   path:  "/bulker/productDetails",
  //   element: <ProductDetails />,
  // },
  {
    path: "/bulker/productDetails/:productId",
    element: <ProductDetails />,
  },
  {
    path:  "/bulker/terms",
    element: <Terms />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
          <RouterProvider router={router} />
          <ScrollToTopButton />
     
  </StrictMode>
)
