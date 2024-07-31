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
    window.location.href = path;
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
              <NavLink href="/AngularQ" currentPath={currentPath}>Angular</NavLink>
              
              <div className="relative group">
                <div className={`hover:underline cursor-pointer lg:ml-5 ${activeMenuItem.includes('QuizMore') ? 'text-green-200' : ''}`} onClick={() => setActiveMenuItem('/QuizMore')} currentPath={currentPath}>Quiz More!</div>
                <div className="absolute left-0 hidden group-hover:block bg-black text-white rounded">
                  <div onClick={() => handleSelectChange("/PythonQ")} className={`p-2 px-10 text-center cursor-pointer ${activeMenuItem === '/PythonQ' ? 'bg-green-600' : 'hover:bg-green-600'}`}>Python</div>
                  <div onClick={() => handleSelectChange("/JavaQ")} className={`p-2 px-10 text-center cursor-pointer ${activeMenuItem === '/JavaQ' ? 'bg-green-600' : 'hover:bg-green-600'}`}>Java</div>
                  <div onClick={() => handleSelectChange("/DotnetQ")} className={`p-2 px-10 text-center cursor-pointer ${activeMenuItem === '/DotnetQ' ? 'bg-green-600' : 'hover:bg-green-600'}`}>Dotnet</div>
                  <div onClick={() => handleSelectChange("/MongodbQ")} className={`p-2 px-10 text-center cursor-pointer ${activeMenuItem === '/MongoDBQ' ? 'bg-green-600' : 'hover:bg-green-600'}`}>MongoDB</div>
                  {/* Add more options as needed */}
                </div>
              </div>
              <NavLink href="/Privacypolicy" currentPath={currentPath}>Privacy Policy</NavLink>
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
