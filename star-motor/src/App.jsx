import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import NotFound from './components/NotFound'
import ServicePage from './pages/ServicesPage'
import ManagementPage from './pages/ManagementPage'
import AboutUsPage from './pages/AboutUsPage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import ContactUsPage from './pages/ContactUsPage'
import GalleryPage from './pages/GalleryPage'

function App() {

  return (
    <Routes>
      {/* All main pages inside Layout → Header/Footer fixed */}
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
         <Route path="/service/:serviceId" element={<ServicePage />} />
         <Route path="/management" element={<ManagementPage />} />
         <Route path="/about" element={<AboutUsPage />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactUsPage />} /> 
        <Route path="/gallery" element={<GalleryPage />} /> 
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
