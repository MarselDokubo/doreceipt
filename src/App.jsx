import { createRoutesFromElements } from 'react-router-dom'
import { PageNotFound } from './pages/404'
import { Login } from './pages/login'
import {createBrowserRouter, BrowserRouter , Routes, Route} from 'react-router-dom'
import { SignUp} from './pages/signup'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { InboxLayout } from './pages/inbox'
import { Nav } from './components/nav'
import {Home, loader as homeLoader } from './pages/home'
import { AuthProvider } from './context/authContext'
import { AuthLayout } from './pages/authlayout'
import { Expenses, loader as expensesLoader } from './pages/expenses'
import { Reports, loader as reportsLoader } from './pages/reports'
import { Insights, loader as insightsLoader } from './pages/insights'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<AuthLayout /> }>
      <Route index element={<Login />}  />
      <Route path='signup' element={<SignUp />} />
    </ Route>
    <Route path='/inbox' element={<InboxLayout />} >
      <Route index element={ <Home />} loader={homeLoader} />
      <Route path="expenses" element={<Expenses />} loader={ expensesLoader} />
      <Route path="reports" element={ <Reports />} loader={reportsLoader} />
      <Route path="insights" element={<Insights />} loader={insightsLoader } />
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