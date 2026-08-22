import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const menuRef=useRef(null)
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute("download", "Sohaib_Alkhaldy_Resume.pdf");
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
useEffect(() => {
    // دالة بتفحص وين المستخدم كبس
    const handleClickOutside = (event) => {
      // إذا الكبسة كانت برا الـ menuRef والقائمة أساساً مفتوحة (toggle === true)
      if (menuRef.current && !menuRef.current.contains(event.target)) {
       
        setToggle(false);
      }
    };

     document.addEventListener("mousedown", handleClickOutside);

     return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt='logo' className='w-24 h-9 object-contain'/>
        </Link>
        
        {/* شاشة الكمبيوتر */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#915eff]" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          
          {/* تم ربط الدالة هنا بنجاح */}
          <button 
            onClick={handleDownloadResume}
            className='bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer transition-colors'
          >
            My Resume
          </button>
        </ul>

        {/* شاشة الموبايل */}
        <div           ref={menuRef}
  className=' sm:hidden flex flex-1 justify-end items-center'>
       
       {
        !toggle ? (
          <div
             src={toggle ? close : menu} 
            alt='menu'
            className='w-[20px] h-[24px]  object-contain cursor-pointer flex flex-col justify-between rounded-[10px] items-end z-30'
            onClick={() => setToggle(!toggle)}
          >
            <span className='inline-block w-[20px] h-[4px] bg-[#915eff] rounded-full'></span>
            <span className='inline-block w-[28px] h-[4px] bg-[#915eff] rounded-full'></span>
            <span className='inline-block w-[28px] h-[4px] bg-[#915eff] rounded-full'></span>
          </div>):(<div></div>)
}
<div className={`${!toggle ? 'hidden' : 'flex'} bottom-0 p-6 fixed top-0 right-0 w-[60%] sm:w-[40%] z-10 flex-col gap-8 shadow-2xl bg-[#fcfcfc]  pt-30`}>  <ul className="list-none  flex justify-start items-start flex-col gap-6 w-full pt-5">
    {navLinks.map((link) => (
      <li
        key={link.id}
        className={`${
          active === link.title ? "text-[#915eff]" : "text-secondary"
        } font-poppins font-medium cursor-pointer text-[18px]`}
        onClick={() => {
          setActive(link.title);
          setToggle(false);
        }}
      >
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ))}
  </ul>
  
  <button 
    onClick={() => {
      setToggle(false);
      handleDownloadResume();
    }}
    className='bg-green-700 text-white mt-[300px]  py-3 px-4 rounded-xl hover:bg-green-600 cursor-pointer text-sm text-center w-full'
  >
    My Resume
  </button>
</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;