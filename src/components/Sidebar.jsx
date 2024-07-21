import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/api';
import profileImage from '../assets/fav.png';
import { BiCuboid, BiChevronDown, BiChevronUp, BiChevronRight, BiScatterChart, BiGroup, BiDialpadAlt, BiCustomize, BiMessage, BiCog } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [profileName, setProfileName] = useState('');
  const [role, setRole] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = '2';
        const token = 'user_token';

        const userData = await getUserData(userId, token);
        setProfileName(userData.username);
        setRole(userData.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : 'sidebar'}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <h5>central.edu.gh</h5>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <div className='sideNav'>

        <Link to="/" className="side-nav-link">
          <div className='side-nav-button-active'>
            <BiCuboid className='icon'/>
            Dashboard
          </div>
        </Link>

        <div>
          <Link to="#" className="side-nav-link" onClick={toggleDropdown}>
            <div className='side-nav-button'>
              <BiCog className='icon' />
              Setup
              {isOpen ? <BiChevronUp className='ms-auto' /> : <BiChevronDown className='ms-auto' />}
            </div>
          </Link>
          {isOpen && (
            <div>
              <Link to="/setup/schools" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Schools
                </div>
              </Link>
              <Link to="/setup/banks" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Banks
                </div>
              </Link>
              <Link to="#" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Job Title
                </div>
              </Link>
              <Link to="#" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Department
                </div>
              </Link>
              <Link to="#" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Professional Bodies
                </div>
              </Link>
              <Link to="#" className="side-nav-link">
                <div className='side-nav-button-menu'>
                  <BiChevronRight className='icon' />
                  Bank Branches
                </div>
              </Link>
            </div>
          )}
        </div>

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

      <div className='profile-details'>
        <div className='elipse'>
          <img src={profileImage} alt='' />
        </div>
        <div className='profile-info'>
          <div>
            <h6 className='profile-name'> Adewale</h6>
            <p className='text-muted'>hr-admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
