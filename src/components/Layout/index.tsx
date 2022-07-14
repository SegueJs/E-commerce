import React from "react"
import '../../styles/components/Layout.css'
import Footer from "../Footer"
import Header from "../Header"

const Layout:React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
        <div className="main">
          <Header />
          {children}
          <Footer />
        </div>
  )
}

export default Layout
