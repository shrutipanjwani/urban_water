import React, { Component } from 'react'
import './div_1.css'
import image from '../images/div_1_image.jpg';
 class div_1 extends Component {
    render() {
        return (
            <div className='container'>
                {/* <img src={ image } /> */}
                {/* <div className="centered">
                    
                <h1 className='lg:text-5xl md:text-3xl sm:text-1xl' >Simple and reliable maps</h1>
                    <p>We are Water Experts committed to protect your livelihoods</p>
                
                </div> */}
                <header>
  <div className='title'>
    <h1>Simple and reliable maps</h1>
    <p>We are Water Experts committed to your livelihoods</p>
    <h2>Flood Risk Maps</h2>
    <input type="text" className="search-ctrl-geocoder--input" placeholder="Enter Address, Post Code, City" aria-label></input>
    <p className='para'>
        Our maps provide flood risk information and flood protection intervention in an easy to use format. Check out our maps below.
    </p>
  </div>
</header>

{/* <main>
  
  
    
    </main> */}
                

            </div>
        );
    }
}
 export default div_1