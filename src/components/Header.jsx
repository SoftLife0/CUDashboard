import React from 'react'
 import { BsJustify, BsSearch } from 'react-icons/bs'
import softlife from '../assets/softlife.png'
function Header({OpenSidebar, onProfileClick, showLogout, handleLogout})  {

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>

        <div>
          <form action="" className='d-flex'>
            <input type="text" placeholder='Search...' className='search' />
          </form>
        </div>

        <div>
          <button className='pill-button' style={{ padding: '8px 12px', borderRadius: '5px'}}>
            Logout
          </button>
        </div>
    </header>
  )
}

export default Header