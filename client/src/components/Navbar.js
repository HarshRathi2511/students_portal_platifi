import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div className = 'menu-bars'>
          <Link to='#' >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div>
          <div className = 'menu-bars-home'>
          <Link to='/home'>
            <AiIcons.AiFillHome />
          </Link>
          </div>
          <div className = 'menu-bars-students'>
          <Link to='/students'>
            <IoIcons.IoIosPaper />
          </Link>
          </div>
          <div className = 'menu-bars-support'>
          <Link to='/support'>
            <IoIcons.IoMdHelpCircle />
          </Link>
        </div>
        </div>
        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
            <div>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <FaIcons.FaBars />
              </Link>
           </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;