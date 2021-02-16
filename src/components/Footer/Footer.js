import React from 'react'
 import '../Footer/Footer.css'
 import logo from '../../images/Urban_Water_cv.png';

 function Footer() {
     return (
         <div>
         <div className="Footer">
          <img src={ logo } className=" foot_img fill-current h-14 mr-2 " strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895"/> 
 <h1 className='Footer_head'>Creating a better planet</h1>
 <h3>Flood Risk Assessments ready within 48 hrs.</h3>

     <div className='Tags'>
     <p className='contact'>📞 +1 (344) 532-2352</p>


     <p className='mail'>✉️ info@urban-water.co.uk </p>


     <p className='location'>📍List Item #1 </p>

     </div>
     <button
                    className=" footer-btn w-51 flexDirection-center justify-center py-2 text-blue font-semibold transition duration-300 hover:bg-blue-400">

                       Get a free quote →
                 </button>

         </div>
         <div className='last'>
         <p className='foot'>Urban Water © 2021 | All rights reserved.</p>
         </div>
         </div>
     )
 }

 export default Footer