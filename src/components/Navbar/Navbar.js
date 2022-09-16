import './Navbar.scss';
import burgerIcon from '../../assets/icons/hamburger-svgrepo-com.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <section className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__restaurant'>
          <img className='navbar__restaurant-logo' src={burgerIcon} alt='Restaurant Logo'/>
          <div className='navbar__restaurant-name p1'>McRonalds</div>
        </div>
        <div className='navbar__links'>
          <ul className='navbar__list'>
            <li className='navbar__items p2'><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li className='navbar__items p2'><NavLink to='/schedules'>Schedules</NavLink></li>
            <li className='navbar__items p2'><NavLink to='/timeclocking'>Time Clocking</NavLink></li>
            <li className='navbar__items p2'><NavLink to='/skillbuilding'>Skillbuilding</NavLink></li>
          </ul>
        </div>
        <div className='navbar__profile'>
          <div className='navbar__profile-option p2'>PROFILE OPTIONS</div>
          <div className='navbar__profile-icon'></div>
        </div>
      </div>
    </section>
  )
}

export default Navbar;