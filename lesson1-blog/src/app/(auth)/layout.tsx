import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface AuthLayoutProps{
    children:React.ReactNode
}

function AuthLayout({children}:AuthLayoutProps) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>    
        
    </div>
  )
}

export default AuthLayout