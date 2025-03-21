import { Routes, Route } from 'react-router-dom'

import Login from './components/authentication/Login'
import Header from './components/Header'
import Home from './components/Home'
import Catalog from './components/tech/Catalog'
import NotFound from './components/404'
import Register from './components/authentication/Register'
import Create from './components/tech/Create'
import Details from './components/tech/Details'
import Edit from './components/tech/Edit'
import About from './components/About'
import Profile from './components/Profile'
import { AuthContextProvider } from './contexts/authContext'
import { PrivateRoute, PublicRoute } from './utils/routeGuard'
import Logout from './components/authentication/Logout'


function App() {

  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Catalog />} />
          <Route path="/auth/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/auth/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/about" element={<About />} />

          <Route path="/tech/create" element={<PrivateRoute><Create /></PrivateRoute>} />
          <Route path="/tech/:id/details" element={<Details />} />
          <Route path="/tech/:id/edit" element={<PrivateRoute><Edit /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/auth/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
