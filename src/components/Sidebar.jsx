import React from 'react';
import logo from '../assets/Central.png';
import profileImage from '../assets/fav.png'
import { BiCuboid, BiScatterChart, BiGroup, BiDialpadAlt, BiCustomize, BiMessage } from 'react-icons/bi';
import { Link } from 'react-router-dom';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : 'sidebar'}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <img src={logo} alt='' /> */}
          <h5>central.edu.gh</h5>

        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div className='sideNav'>

        <Link to="" className="side-nav-link">
          <div className='side-nav-button-active'>
            <BiCuboid className='icon'/>
            Dashboard
          </div>
        </Link>
        <Link to="" className="side-nav-link">
          <div className='side-nav-button'>
            <BiScatterChart className='icon'/>
            Course Allocation
          </div>
        </Link>
        <Link to="" className="side-nav-link">
          <div className='side-nav-button'>
            <BiGroup className='icon'/>
            Lecturers
          </div>
        </Link>
        <Link to="" className="side-nav-link">
          <div className='side-nav-button'>
            <BiDialpadAlt className='icon'/>
            Department
          </div>
        </Link>
        <Link to="" className="side-nav-link">
          <div className='side-nav-button'>
            <BiCustomize className='icon'/>
            Responses
          </div>
        </Link>
        <Link to="" className="side-nav-link">
          <div className='side-nav-button'>
            <BiMessage className='icon'/>
            Messages
          </div>
        </Link>
        


      </div>

     

      <div className="profile-details">
        <div className='elipse'>
          <img src={profileImage} alt="" width={100}/>
        </div>
        <div className="profile-info">
          <div className="profile-name">Chedar</div>
          <div className="text-muted">satc-admin</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
