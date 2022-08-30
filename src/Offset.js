import React, { Component } from "react";
import Slider from "react-slick";
import './offset.css'
import offset1 from './img/offset/1.jpeg'
import offset2 from './img/offset/2.jpeg'
import offset3 from './img/offset/3.jpeg'
import offset4 from './img/offset/4.jpeg'
import offset5 from './img/offset/5.jpeg'
import offset6 from './img/offset/6.jpeg'
import offset7 from './img/offset/7.jpeg'
import offset8 from './img/offset/8.jpeg'
import offset9 from './img/offset/9.jpeg'
import offset10 from './img/offset/10.jpeg'
import offset11 from './img/offset/11.jpeg'
import offset12 from './img/offset/12.jpeg'
import offset13 from './img/offset/13.jpeg'
import offset14 from './img/offset/14.jpg'
import offset15 from './img/offset/15.jpeg'
import offset16 from './img/offset/16.jpeg'
import offset17 from './img/offset/17.jpg'
import offset18 from './img/offset/18.jpeg'
import offset19 from './img/offset/19.jpg'
import offset20 from './img/offset/20.jpeg'
import offset21 from './img/offset/21.jpeg'
import offset22 from './img/offset/22.jpg'
import offset23 from './img/offset/23.jpg'
import offset24 from './img/offset/24.jpg'
import offset25 from './img/offset/25.jpg'
import offset26 from './img/offset/2.jpeg'




export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="carousel1">
        <h2>OFFSET</h2>
        <br/>
        <div className='line'></div>
        <br/>
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
          <div>
          <img src={offset11}></img>
          </div>
          <div>
          <img src={offset12}></img>
          </div>
          <div>
          <img src={offset13}></img>
          </div>
          <div>
          <img src={offset14}></img>
          </div>
          <div>
          <img src={offset15}></img>
          </div>
          <div>
          <img src={offset16}></img>
          </div>
          <div>
          <img src={offset17}></img>
          </div>
          <div>
          <img src={offset18}></img>
          </div>
          <div>
          <img src={offset19}></img>
          </div>
          <div>
          <img src={offset20}></img>
          </div>
          <div>
          <img src={offset21}></img>
          </div>
          <div>
          <img src={offset22}></img>
          </div>
          <div>
          <img src={offset23}></img>
          </div>
          <div>
          <img src={offset24}></img>
          </div>
          <div>
          <img src={offset25}></img>
          </div>
          <div>
          <img src={offset26}></img>
          </div>
     
        </Slider>
      </div>
    );
  }
}
