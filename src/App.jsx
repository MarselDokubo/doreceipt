import { createRoutesFromElements } from 'react-router-dom'
import { PageNotFound } from './pages/404'
import { Login, action as loginAction } from './pages/login'
import { SignUp, action as signupAction} from './pages/signup'
import {createBrowserRouter, BrowserRouter , Routes, Route} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { InboxLayout } from './pages/inbox'
import { Nav } from './components/nav'
import {Home, loader as homeLoader } from './pages/home'
import { AuthProvider } from './context/authContext'
import { AuthLayout } from './pages/authlayout'
import { Expenses, loader as expensesLoader } from './pages/expenses'
import { action as newExpenseAction } from './new-expense'
import { Reports, loader as reportsLoader } from './pages/reports'
import { Insights, loader as insightsLoader } from './pages/insights'
import { Settings } from './settings'
import { Support } from './support'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<AuthLayout /> }>
      <Route index element={<Login />} action={loginAction}  />
      <Route path='signup' element={<SignUp />} action={signupAction} />
    </ Route>
    <Route path='/inbox' element={<InboxLayout />} >
      <Route index element={ <Home />} loader={homeLoader} />
      <Route path="expenses" element={<Expenses />} action= {newExpenseAction} loader={ expensesLoader} />
      <Route path="reports" element={ <Reports />} loader={reportsLoader} />
      <Route path="insights" element={<Insights />} loader={insightsLoader } />
      <Route path="settings" element={<Settings />}  />
      <Route path="support" element={<Support />}  />
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