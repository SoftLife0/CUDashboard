import React from 'react'
 import { BsJustify, BsSearch } from 'react-icons/bs'
import softlife from '../assets/softlife.png'
function Header({OpenSidebar, onProfileClick, showLogout, handleLogout})  {

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>   
        <form action="" className='d-flex'>
          <input type="text" placeholder='Search...' style={{ height: '4vh', borderRadius: '5px', border: '1px solid #991813' }} />
        </form>
        </div>
        <div className='header-right'>
        <div className=''>
          <button className='pill-button' style={{ padding: '8px 12px', borderRadius: '5px'}}>
            Logout
          </button>
        </div>
        </div>
    </header>
  )
}

export default Header