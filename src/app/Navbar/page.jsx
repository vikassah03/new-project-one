"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../img/coding-quiz.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleSelectChange = (path) => {
    setActiveMenuItem(path);
  };

  return (
    <div>
      <nav className="bg-green-800 p-4 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className={`text-white text-lg font-semibold ${isOpen ? 'hidden' : ''}`}>
            <Link href="/"><Image src={img} alt="Coding Quiz" className='w-60'/></Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none absolute right-4 top-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
          <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
            <div className="text-white flex flex-col lg:flex-row lg:items-center">
              <NavLink href="/" currentPath={currentPath}>Home</NavLink>
              <NavLink href="/About" currentPath={currentPath}>About</NavLink>
              <NavLink href="/HtmlQ" currentPath={currentPath}>Html</NavLink>
              <NavLink href="/CssQ" currentPath={currentPath}>Css</NavLink>
              <NavLink href="/JavascriptQ" currentPath={currentPath}>JavaScript</NavLink>
              <NavLink href="/ReactQ" currentPath={currentPath}>React.JS</NavLink>
              <NavLink href="/NextQ" currentPath={currentPath}>Next.JS</NavLink>
              <NavLink href="/NodeQ" currentPath={currentPath}>Node.js</NavLink>
              <NavLink href="/PhpQ" currentPath={currentPath}>Php</NavLink>
              <NavLink href="/MysqlQ" currentPath={currentPath}>MySQL</NavLink>
              {/* <NavLink href="/AngularQ" currentPath={currentPath}>Angular</NavLink> */}
              
              <div className="relative group mt-4 lg:mt-0 lg:ml-6">
                <div className={`hover:underline cursor-pointer ${activeMenuItem.includes('QuizMore') ? 'text-green-200' : ''}`} onClick={() => setActiveMenuItem('/QuizMore')}>Quiz More</div>
                <div className="absolute left-0 hidden group-hover:block bg-black text-white rounded ">
                  <NavLink href="/AngularQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/AngularQ")} className={`p-2 px-10 w-auto  cursor-pointer ${activeMenuItem === '/AngularQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>Angular</div>
                  </NavLink>
                  <NavLink href="/PythonQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/PythonQ")} className={`p-2 px-10  cursor-pointer ${activeMenuItem === '/PythonQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>Python</div>
                  </NavLink>
                  <NavLink href="/JavaQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/JavaQ")} className={`p-2 px-10  cursor-pointer ${activeMenuItem === '/JavaQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>Java</div>
                  </NavLink>
                  <NavLink href="/DotnetQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/DotnetQ")} className={`p-2 px-10  cursor-pointer ${activeMenuItem === '/DotnetQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>Dotnet</div>
                  </NavLink>
                  <NavLink href="/MongodbQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/MongodbQ")} className={`p-2 px-10  cursor-pointer ${activeMenuItem === '/MongodbQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>MongoDB</div>
                  </NavLink>
                  <NavLink href="/AptitudeTestQ" currentPath={currentPath}>
                    <div onClick={() => handleSelectChange("/AptitudeTestQ")} className={`p-2 px-10  cursor-pointer ${activeMenuItem === '/AptitudeTestQ' ? 'bg-green-600 text-white' : 'hover:bg-green-600'}`}>Aptitude Test</div>
                  </NavLink>
                </div>
              </div>
              <NavLink href="/Privacypolicy" currentPath={currentPath}>Privacy Policy</NavLink>
              <NavLink href="/TermsAndConditions" currentPath={currentPath}>Terms & Conditions</NavLink>
              <NavLink href="/Contact" currentPath={currentPath}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const NavLink = ({ href, children, currentPath }) => {
  const isActive = currentPath === href;
  return (
    <Link href={href} className={`block mt-4 lg:inline-block lg:mt-0 lg:ml-6 ${isActive ? 'text-green-200' : ''}`}>
      {children}
    </Link>
  );
}


export default Navbar;
