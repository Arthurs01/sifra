import React, { Component } from "react";
import Slider from "react-slick";
import './graficos.css'
import offset1 from './img/retocadas/Corrugado empalmado/1.jpeg'
import offset2 from './img/retocadas/Corrugado empalmado/2.jpeg'
import offset3 from './img/retocadas/Corrugado empalmado/3.jpg'
import offset4 from './img/retocadas/Corrugado empalmado/4.jpg'
import offset5 from './img/retocadas/Corrugado empalmado/5.jpg'
import offset6 from './img/retocadas/Corrugado empalmado/6.jpg'






export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="carousel1">
        <h2 className="corrugado_empalmado">CORRUGADO EMPALMADO</h2>
        <br/>
        <div className="line"></div>
        <br/><br/><br/>
        <Slider {...settings}>
          <div className="carousel_item">
           <img src={offset1}></img>
          </div>
          <div>
          <img src={offset2}></img>
          </div>
          <div>
          <img src={offset3}></img>
          </div>
          <div>
          <img src={offset4}></img>
          </div>
          <div>
          <img src={offset5}></img>
          </div>
          <div>
          <img src={offset6}></img>
          </div>

  
        </Slider>
        <br/><br/><br/><br/>
      </div>
    );
  }
}
