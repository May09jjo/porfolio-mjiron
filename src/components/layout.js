
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Navbar } from "./header_component/navbar"

const Layout = ({ placeholder, children }) => {
  
  return (
    <>
      <Navbar  placeholder={placeholder === undefined ? true : placeholder} />
      
      <main>
           <div className="wrapper">{children}</div>
      </main>
        
        
        <footer>
          © {new Date().getFullYear()}, Todos los derechos reservados - Desarrollado por: 
          {` `}
          <a href="https://www.gatsbyjs.org">Michael Jiron</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
