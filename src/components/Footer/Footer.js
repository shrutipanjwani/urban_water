import React from 'react'
 import '../Footer/Footer.css'
 import logo from '../../images/Urban_Water_cv.png';
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube}from 'react-icons/fa';
import {BiRss} from 'react-icons/bi';
import{MdCall} from 'react-icons/md';
import{IoMail} from 'react-icons/io5';
import{IoLocationSharp} from 'react-icons/io5';
 function Footer() {
     return (
         <div>
         <div className="Footer">
          <img src={ logo } className=" foot_img fill-current h-14 mr-2 " strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895"/> 
 <h1 className='Footer_head'>Creating a better planet</h1>
 <h3 className='h3_foot'>Flood Risk Assessments ready within 48 hrs.</h3>

     
     <div class="grid grid-cols-3 justify-items-stretch">
  <div className="justify-self-center"> <MdCall/> +1 (344) 532-2352 </div>
  <div className="justify-self-center"><IoMail/> info@urban-water.co.uk </div>
  <div className="justify-self-center"><IoLocationSharp/> List Item #1</div>
</div>
     
                 <button class=" footer_btn bg-white hover:bg-green-100 text-green-400 font-semibold py-2 px-4 border border-green-400 rounded-full shadow">
                 Get a free quote →
</button>

         </div>
        
         <div className='last flex static '>
         <p className='foot justify-start'>Urban Water © 2021 | All rights reserved.</p>
         <div className='icons flex justify-end space-x-3 ml-96 mt-1'>
         <FaFacebook/>
         <FaTwitter/>
        <FaYoutube/>
        <BiRss/>
         </div>
         
         
        
         
        
         </div>
         </div>
     )
 }

 export default Footer