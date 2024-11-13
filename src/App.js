import React from 'react'
import Home from './Page/Home'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Product from './Page/Product'
import Root from './Page/Root'
import Error from './Page/Error'
import ProductItems from './Page/ProductItems'


// this is the first way...
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      // these are another 2 ways to pass the home or root page on the browser
      // {path:'',element:<Home/>},
      // {path:'/',element:<Home/>},
      // this is also a way to render the home pathe without passing the path
      // this is called index-route
      {index:true, element:<Home/>},
      {path:'/product',element:<Product/>},
      {path:'/product/:productId',element:<ProductItems/>}

    ]
  }
 
])

// this is the second way
// const routeDefinination=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/product' element={<Product/>}/>
//   </Route>
// )
// const router=createBrowserRouter(routeDefinination)

const App = () => {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
