import React from 'react'
import Navbar from '@components/NavBar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <footer>Soy un footer</footer>
    <style jsx>{`
        footer {
          background: salmon;
        }
      `}</style>
    </>
  )
}

export default Layout