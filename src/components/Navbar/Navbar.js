import './Navbar.scss';
import burgerIcon from '../../assets/icons/svg/hamburger-svgrepo-com.svg'
import sevenShiftsLogo from '../../assets/logos/svg/logo-full-colour.svg'
import { NavLink } from 'react-router-dom'
// import userProfile from '../../assets/images/user.png'

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
          <div className='navbar__profile-icon'>
            {/* <img className='navbar__profile-icon-img' scr={userProfile} alt="user profile stamp"/> */}
          </div>
          <img className='navbar__seven-shifts-logo' src={sevenShiftsLogo} alt='seven shifts logo'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar;