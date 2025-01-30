

import { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ContextProvider } from '../../Context/Context'
const NavBar = () => {


  const {pathname} = useLocation()
  const {category} = useParams()
  const [toggle, setToggle] = useState(false)
  const {addCart,wishList} = useContext(ContextProvider)
  const navigate = useNavigate()



  const lgActiveLink = ({ isActive }) => ({
    color: isActive ? pathname === '/' || pathname === `/product/${category}`? '#fff': '#9538E2': '',
    background: isActive ? 'transparent' : 'transparent',
    textDecoration: isActive ? pathname === '/' || pathname === `/product/${category}` ? 'underline': '': '',
    fontWeight: isActive ? '700' : 'normal'
    
  })
  const phoneActiveLink = ({ isActive }) => ({
    color: isActive ? pathname === '/'||  pathname === `/product/${category}`? '#9538E2': '#9538E2': '',
    background: isActive ? 'transparent' : 'transparent',
    textDecoration: isActive ? pathname === '/' || pathname === `/product/${category}`? 'underline': '': '',
    fontWeight: isActive ? '700' : 'normal'
    
  })

  let lgNavLinks = 
    <>
      <li>
        <NavLink to='/' style={lgActiveLink} className='flex justify-center w-full text-center'>
          Home
        </NavLink>
      </li>
      <li >
        <NavLink to='/statistics' style={lgActiveLink} className='flex justify-center w-full text-center'>
        Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard' style={lgActiveLink} className='flex justify-center w-full text-center'>Dashboard</NavLink >
      </li>
    </>
  

  let phoneNavLinks = 
  <>
    <li>
      <NavLink to='/' style={phoneActiveLink} className='flex justify-center w-full text-center'>
        Home
      </NavLink>
    </li>
    <li >
      <NavLink to='/statistics' style={phoneActiveLink} className='flex justify-center w-full text-center'>
      Statistics
      </NavLink>
    </li>
    <li>
      <NavLink to='/dashboard' style={phoneActiveLink} className='flex justify-center w-full text-center'>Dashboard</NavLink >
    </li>
  </>

  const handleCart = () => {
    navigate('/dashboard')

  }
  const handleWishList = () => {
    navigate('/dashboard/wishlist')

  }


  return (
    <div className={`navbar  lg:grid lg:grid-cols-3 lg:justify-between  ${pathname === '/' || pathname === `/product/${category}` ?'mt-8' : ''}`}>
      <div className='p-0 navbar '>
        <a href='/' className={`text-xl md:text-2xl  lg:text-3xl font-bold text-black ${pathname === '/' || pathname === `/product/${category}` ? 'text-white' : ''}`}>Gadget Heaven</a>
      </div>
      <div className='justify-center hidden navbar-center lg:flex '>
        <ul className={`flex gap-4 px-1 menu menu-horizontal ${pathname === '/' || pathname === `/product/${category}` ? 'text-white' : ''}`}>{lgNavLinks}</ul>
      </div>
      <div className='hidden lg:block'>
        <div className='flex justify-end gap-4'>
          <button onClick={handleCart} className='rounded-full flex justify-center items-center bg-white h-7 w-7 border border-gray-300 relative'><IoCartOutline /><span className={`absolute -top-3.5 text-gray-600 rounded-full ${addCart.length> 0 ? 'block': 'hidden'}`}>{addCart.length}</span></button>
          <button onClick={handleWishList}  className='rounded-full flex justify-center items-center bg-white h-7 w-7 border border-gray-300 relative'><FontAwesomeIcon icon={faHeart}/><span className={`absolute -top-3.5 text-gray-600 rounded-full ${wishList.length> 0 ? 'block': 'hidden'}`}>{wishList.length}</span></button>
        </div>
      </div>
      <div className={`navbar-end `}>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden' onClick={() => {setToggle(!toggle)}}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`w-5 h-5 ${pathname === '/' || pathname === `/product/${category}` ?'text-white' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0 border-primary-color border-[1px] ${toggle && 'hidden'}`}
          >
            <div className={`flex flex-col justify-center text-center gap-2 ${pathname === '/' || pathname === `/product/${category}` && 'text-black'}`} >{phoneNavLinks}</div>
            <div className='flex justify-center gap-2 pt-2 lg:hidden'>
            <button onClick={handleCart} className='rounded-full flex justify-center items-center bg-white h-7 w-7 border border-gray-300 relative'><IoCartOutline /><span className={`absolute -top-3.5 text-gray-600 rounded-full ${addCart.length> 0 ? 'block': 'hidden'}`}>{addCart.length}</span></button>
            <button onClick={handleWishList}  className='rounded-full flex justify-center items-center bg-white h-7 w-7 border border-gray-300 relative'><FontAwesomeIcon icon={faHeart}/><span className={`absolute -top-3.5 text-gray-600 rounded-full ${wishList.length> 0 ? 'block': 'hidden'}`}>{wishList.length}</span></button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar