"use client"
import { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between ">
                    <div className="text-white text-lg font-semibold ">
                        <Link href="/">MyWebsite</Link>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none absolute right-4 top-4">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="text-white lg:flex lg:items-center">
                            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 ">Home</Link>
                            <Link href="/About" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">About</Link>
                            <Link href="/HtmlQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Html</Link>
                            <Link href="/CssQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Css</Link>
                            <Link href="/JavascriptQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">JavaScript</Link>
                            <Link href="/ReactQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">React.JS</Link>
                            <Link href="/NextQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Next.JS</Link>
                            <Link href="/NodeQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Node.js</Link>
                            <Link href="/PhpQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Php</Link>
                            <Link href="/PythonQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Python</Link>
                            <Link href="/MysqlQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">MySQL</Link>
                            <Link href="/AngularQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Angular</Link>
                            <Link href="/JavaQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Java</Link>
                            <Link href="/DotnetQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">Dot Net</Link>
                            <Link href="/MongodbQ" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6">MongoDB</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Page;
