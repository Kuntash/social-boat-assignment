import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png';
import profilePic from '../assets/images/profile-pic.jpg';
const Header = () => {

  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const setScrollPosition = (e: Event) => {
    console.log(window.scrollY);
    if(window.scrollY === 0)
      setIsNavVisible(true);
    else
      setIsNavVisible(false);
  }
  useEffect(() => {

  window.addEventListener('scroll',setScrollPosition)

    return () => {
      window.removeEventListener('scroll', setScrollPosition);
    }
  }, []);
  return (
    <header className={`${isNavVisible ? '' : 'fixed shadow-xl shadow-gray-100 w-full'} flex items-center justify-between px-6 py-4 bg-white transition-all`}>
      <div> 
        <img src={logo} alt='Social boat logo' className='h-10'/>
      </div>
      <div>
        <input />
      </div>
      <div className='  '>
        <img src={profilePic} className='h-[70px] w-[70px] rounded-full shadow-2xl shadow-gray-600  transition-all duration-250 ease-in hover:cursor-pointer hover:scale-110' alt='profile of user' />
      </div>
    </header> 
  )
}

export default Header