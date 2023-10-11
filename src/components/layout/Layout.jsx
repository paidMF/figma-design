import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <div style={{ background: "var(--black)" }}>
        <Header /> 

        <Outlet />
      </div>

      
      
        

      <Outlet />
        
        

    </>
    

    
  )
}

export default Layout
