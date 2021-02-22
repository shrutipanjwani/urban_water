import React, { Component } from "react";
import "./OurServices_card.css";
import "./NewService.js";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
export class OurServices_card extends Component {
  render() {
    const cardInfo = [
      {
        id: "1",
        image: process.env.PUBLIC_URL + "/images/flood-risk-assessment.jpg",
        title: "Flood Risk Assessment",
        text:
          "Compliant  flood risk assessment with the Planning Policy and the Environment Agency regulations",
      },
      {
        id: "2",
        image:
          process.env.PUBLIC_URL + "/images/Drainage-strategy-urban-water.jpg",
        title: "Drainage Design",
        text:
          "Sustainable Drainage strategies  and foul water drainage designs compliant with the local and national drainage guidance",
      },
      {
        id: "3",
        image:
          process.env.PUBLIC_URL +
          "/images/Climate-change-adaptation-urban-water.jpg",
        title: "Climate Change Adaptation",
        text:
          "Design of green infracture and natured based solutions to zero Carbon for the protection of communities and developements",
      },
    ];

    const renderCard = (card, index) => {
      return (
        
        
          <div key={card.id} className="wrapper bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
            <div>
              <img className="div_2_img" src={card.image} alt="montaña" />
            </div>
            <div className="p-3 space-y-8">
              <h3 className=" h3_card text-gray-700 font-semibold text-md">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 leading-sm">{card.text}</p>
            </div>
            <button className="w-51 flexDirection-center justify-center py-2 text-white font-semibold transition duration-300 hover:bg-blue-400">
              Learn More
            </button>
          </div>
        
      );
    };
    return (
      <div>
        <h2 className="card_head w-full sm:w-11/12 px-8 sm:mr-auto sm:ml-auto md:px-0">

          Our Services
        </h2>
        <p className="card_p w-full sm:w-11/12 px-8 sm:mr-auto sm:ml-auto md:px-0">
          We can help your project from planning approval to construction
        </p>
        <div className="grid grid-cols-3 gap-8 m-12">{cardInfo.map(renderCard)}</div>
        <Link className='fire_btn'to="/new-service"> Add New Service</Link>
       
      </div>
    );
  }
}

export default OurServices_card;
