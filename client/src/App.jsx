import { Routes, Route } from 'react-router'

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


function App() {

  return (
    <>
    <AuthContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tech" element={<Catalog />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/about" element={<About />} />

      <Route path="/tech/create" element={<Create />} />
      <Route path="/tech/:id/details" element={<Details />} />
      <Route path="/tech/:id/edit" element={<Edit />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
