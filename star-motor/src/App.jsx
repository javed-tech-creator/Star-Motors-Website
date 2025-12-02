import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import NotFound from './components/NotFound'
import ServicePage from './pages/ServicesPage'
import ManagementPage from './pages/ManagementPage'

function App() {

  return (
    <Routes>
      {/* All main pages inside Layout → Header/Footer fixed */}
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
         <Route path="/service/:serviceId" element={<ServicePage />} />
         <Route path="/management" element={<ManagementPage />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
