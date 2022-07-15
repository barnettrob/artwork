import React from "react";
import Header from "./header";
import "../styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">
        <div>
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout