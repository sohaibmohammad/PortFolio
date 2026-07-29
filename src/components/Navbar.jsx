import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute("download", "Sohaib_Alkhaldy_Resume.pdf");
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                active === link.title ? "text-white" : "text-secondary"
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
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          {/* تم تصحيح شرط الإظهار والإخفاء هنا !toggle */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col gap-4`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            
            {/* زر السيرة الذاتية يظهر أيضاً في قائمة الموبايل */}
            <button 
              onClick={() => {
                setToggle(false);
                handleDownloadResume();
              }}
              className='bg-green-700 text-white py-2 px-3 rounded-md hover:bg-green-600 cursor-pointer text-sm text-center'
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