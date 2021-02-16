import React from 'react'
 import '../Footer/Footer.css'
 import logo from '../../images/Urban_Water_cv.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'


 function Footer() {
     return (
         <div>
         <div className="Footer">
          <img src={ logo } className=" foot_img fill-current h-14 mr-2 " strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895"/> 
 <h1 className='Footer_head'>Creating a better planet</h1>
 <h3 className='h3_foot'>Flood Risk Assessments ready within 48 hrs.</h3>

     
     <div class=" grid grid-cols-3 gap-4">
  <div className='first'>📞 +1 (344) 532-2352 </div>
  <div className='second'>✉️ info@urban-water.co.uk </div>
  <div className='third'>📍 List Item #1</div>
</div>
     
                 <button class=" footer_btn bg-white hover:bg-green-100 text-green-400 font-semibold py-2 px-4 border border-green-400 rounded-full shadow">
                 Get a free quote →
</button>

         </div>
         <div className='last'>
         <p className='foot'>Urban Water © 2021 | All rights reserved.</p>

         <span>
         <FontAwesomeIcon icon={["facebook"]} />
         <FontAwesomeIcon icon={["facebook", "twitter","youtube","rss"]}/>
         </span>
        
         </div>
         </div>
     )
 }

 export default Footer