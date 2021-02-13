import React, { Component } from 'react';
import './card_2.css';
 

export class card_2 extends Component {
    render() {
        const cardInfo2 = [
            {
                image: process.env.PUBLIC_URL + "/images/Flood Risk Map London.jpg",
                title: "London",
                text: "14% properties at risk of flooding 57,000 properties at high or medium risk of flooding"
            },
            {
                image: process.env.PUBLIC_URL + "/images/flood map york.jpg",
                title: "York",
                text: "7% of properties at risk of flooding 3,334 properties at high or medium risk of flooding"
            },
            {
                image: process.env.PUBLIC_URL + "/images/flood map dorset.jpg",
                title: "Dorset",
                text: "5% of properties at risk of flooding 6,651 properties at high or medium risk of flooding"
            },
            {
                image: process.env.PUBLIC_URL + "/images/flood map kent.jpg",
                title: "Kent",
                text: "9% properties at risk of flooding 27,835 properties at high or medium risk of flooding"
            },
            {
                image: process.env.PUBLIC_URL + "/images/flood risk map bristol.jpg",
                title: "Bristol",
                text: "7% properties at risk of flooding 3,540 properties at high or medium risk of flooding"
            },
            {
                image: process.env.PUBLIC_URL + "/images/flood map oxford.jpg",
                title: "Oxford",
                text: "6% properties at risk of flooding 3,521 properties at high or medium risk of flooding"
            },
        ];

        const renderCard = (card, index) => {
            return(
                

                <section className="grid px-6 py-2" style={{margin: '30px 0'}}>

                <div
                class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
                <div>
                   <img className=' card_img ' src={card.image} alt="montaña" />
                </div>
                <div className="p-3 space-y-3">
                   <h3 className=" h3_card text-gray-700 font-semibold text-md">
                      {card.title}
                   </h3 >
                   <p className="text-sm text-gray-900 leading-sm">
                      {card.text}
                   </p>
                 
                </div>
                
                </div>
                

</section>
            );
        };
        return (
    
   
            <div>
                <h2 className='card_head w-full sm:w-11/12 px-8 sm:mr-auto sm:ml-auto md:px-0'> Explore Urban flood risk  </h2>
                <div  className='grid'>
               {cardInfo2.map(renderCard)}
               </div>
            </div>
        )
    }
};

export default card_2;