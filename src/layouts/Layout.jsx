import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        console.log("Triggered sidebar function")
        setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <main className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        
        <div className="main-container">
            {children}
        </div>

    </main>
  )
}

export default Layout