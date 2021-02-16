import './Navbar.css';
 import logo from '../../images/Urban_Water_cv.png';

 import React, { Component } from 'react'

 export class Navbar extends Component {
     render() {
         return (
             <div>
                 <nav className="sticky shadow-md z-50 w-full nav flex flex-wrap items-center justify-between px-4">
   <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
   <img src={ logo } className="fill-current h-14 mr-2 " strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895"/>
   </div>

   <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
   <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
     <span className="navicon bg-grey-darkest flex items-center relative"></span>
   </label>

   <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
     <li className="border-t md:border-none">
       <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker active">Home</a>
     </li>

     <li className="border-t md:border-none">
       <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Flood Risk Map</a>
     </li>

     <li className="border-t md:border-none">
       <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Services</a>
     </li>

     <li className="border-t md:border-none">
       <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker ">Explore Towns</a>
     </li>

     <li className="border-t md:border-none">
       <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Contact Us</a>
     </li>
   </ul>
 </nav>



             </div>
         )
     }
 }

 export default Navbar 