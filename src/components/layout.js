
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { Navbar } from "./header_component/navbar"

const Layout = ({ placeholder, children }) => {
  
  return (
    <>
      <Navbar  placeholder={placeholder === undefined ? true : placeholder} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Todos los derechos reservados - Desarrollado por: 
          {` `}
          <a href="https://www.gatsbyjs.org">Michael Jiron</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
