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
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboad.jsx'
import UsersIndex from './pages/Users/Index.jsx'
import CategoriesIndex from './pages/Categories/Index.jsx'
import ProductsIndex from './pages/Products/Index.jsx'
import ContactsIndex from './pages/Contact/Index.jsx'
import AddCategory from './pages/Categories/Partials/AddCategory.jsx'
import CreateCategory from './pages/Categories/Create.jsx'
import EditCategory from './pages/Categories/Partials/EditCategory.jsx'
import UpdateCategory from './pages/Categories/Edit.jsx'
import AddProductPage from './pages/Products/Create.jsx'
import UpdateProduct from './pages/Products/Edit.jsx'

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
  {
    path:  "/bulker/admin/login",
    element: <Login />,
  },
  {
    path: "/bulker/productDetails/:productId",
    element: <ProductDetails />,
  },
  {
    path:  "/bulker/terms",
    element: <Terms />,
  },
  {
    path:  "/",
    element: <App />,
  },

  {
    path:  "/bulker/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path:  "/bulker/admin/users",
    element: <UsersIndex />,
  },
  {
    path:  "/bulker/admin/categories",
    element: <CategoriesIndex />,
  },
  {
    path:  "/bulker/admin/categories/create",
    element: <CreateCategory />,
  },
  {
    path:  "/bulker/admin/categories/:id/edit",
    element: <UpdateCategory />,
  },
  {
    path:  "/bulker/admin/products",
    element: <ProductsIndex />,
  },
  {
    path:  "/bulker/admin/products/create",
    element: <AddProductPage />,
  },
  {
    path:  "/bulker/admin/products/:id/edit",
    element: <UpdateProduct />,
  },
  {
    path:  "/bulker/admin/contacts",
    element: <ContactsIndex />,
  },
  {
    path:  "/bulker/admin",
    element: <Login />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
          <RouterProvider router={router} />
          <ScrollToTopButton />
     
  </StrictMode>
)
