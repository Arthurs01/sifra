import React, { Component } from "react";
import Slider from "react-slick";
import './graficos.css'
import offset1 from './img/retocadas/Corrugado/1.jpeg'
import offset2 from './img/retocadas/Corrugado/2.jpeg'
import offset3 from './img/retocadas/Corrugado/3.jpeg'
import offset4 from './img/retocadas/Corrugado/4.jpeg'
import offset5 from './img/retocadas/Corrugado/5.jpg'
import offset6 from './img/retocadas/Corrugado/6.jpeg'
import offset7 from './img/retocadas/Corrugado/7.jpeg'
import offset8 from './img/retocadas/Corrugado/8.jpg'
import offset9 from './img/retocadas/Corrugado/9.jpeg'
import offset10 from './img/retocadas/Corrugado/10.png'




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
        <h2 className="corrugado">CORRUGADO</h2>
        <br/>
        <div className='line'></div>
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
          <div>
          <img src={offset7}></img>
          </div>
          <div>
          <img src={offset8}></img>
          </div>
          <div>
          <img src={offset9}></img>
          </div>
          <div>
          <img src={offset10}></img>
          </div>
       
        </Slider>
      </div>
    );
  }
}
