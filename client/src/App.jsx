import React from 'react'
import { GuestLayout, AuthLayout } from './pages/Layout'
import AuthPage from './pages/AuthPage'
import PreviewPage from './pages/PreviewPage'
import Homepage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import { Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      {/* Login Routes*/}
      <Route element={<GuestLayout/>}>
        <Route path= '/login' element={<AuthPage mode="login"/>}/>
        <Route path= '/register' element={<AuthPage mode="register"/>}/>
      </Route>

      {/* Protected Routes*/}
      <Route element={<AuthLayout/>}>
        <Route path= '/' element={<Homepage/>}/>
        <Route path= '/builder/:id' element={<BuilderPage/>}/>
        <Route path= '/preview/:id' element={<PreviewPage/>}/>
      </Route>

      {/* Catch All*/}
      <Route path= '*' element={<Navigate to="/" replace/>} />

    </Routes>
  )
}

export default App