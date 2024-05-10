import { createRoutesFromElements } from 'react-router-dom'
import { PageNotFound } from './pages/404'
import {Login} from './pages/login'
import {createBrowserRouter, BrowserRouter , Routes, Route} from 'react-router-dom'
import { SignUp} from './pages/signup'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { InboxLayout } from './pages/inbox'
import { Nav } from './components/nav'
import {Home } from './pages/home'
import { AuthProvider } from './context/authContext'
import { AuthLayout } from './pages/authlayout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route path='/' element={<AuthLayout /> }>
        <Route index element={<Login />}  />
        <Route path='signup' element={<SignUp />} />
      </ Route>
      <Route path='/inbox' element={<InboxLayout />} >
        <Route index element={ <Home />} />
      </Route>
      <Route path='/*' element={<h2>Page not found</h2> } />      
    </Route>
 ))

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )  
}

export default App


    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Login />} />
    //     <Route path='/signup' element={<SignUp />} action={signupAction} />
    //     <Route path='/login' element={<Login/>}/> 
    //     <Route path='/*' element={<PageNotFound />}/> 
    //   </Routes>
    // </BrowserRouter>
