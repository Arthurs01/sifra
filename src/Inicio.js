import React from 'react'
import {UncontrolledCarousel} from "reactstrap"
import './inicio.css'
import offset from './img/iconos1/offset1.svg'
import digital from './img/iconos1/digital1.svg'
import graficos from './img/iconos1/gráficos1.svg'
import {Link} from "react-router-dom"
import Offset from './Offset.js'
import Graficos from './Graficos.js'
import Digital from './Digital.js'
import face from './img/social/face.svg'
import insta from './img/social/insta.svg'


function Inicio() {
  return (
    <div className='inicio'>
           <div className='social'>
           <a href='https://www.facebook.com/SifraHmo'><img src={face}></img></a><br/>
           <a><img src={insta}></img></a>
           
         </div>
        <div className='slider'>
            
<UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
     /*  src : require ('./img/Slider/Slider01.jpg') */
      src : require ('./img/pics/1.jpg')
    },

   
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src : require ('./img/pics/4.jpg')
      /* src : require ('./img/Slider/Slider01.jpg') */
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src : require ('./img/pics/5.jpg')
      /* src : require ('./img/Slider/Slider01.jpg') */
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src : require ('./img/pics/6.jpg')
      /* src : require ('./img/Slider/Slider01.jpg') */
    },



    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src : require ('./img/pics/10.jpg')
      /* src : require ('./img/Slider/Slider01.jpg') */
    }
  ]}
 />
        </div>

        <div className='servicios'>
           <Link to="/offset"><div><img src={offset}></img><p><strong>OFFSET</strong></p></div></Link>
            <Link to="/corrugado"><div><img src={digital}></img><p><strong>CORRUGADO</strong></p></div></Link>
            <a href="https://sifraexpress.com/"><div><img src={graficos}></img><p><strong>DIGITAL <br/> Y <br/>GRAN FORMÁTO</strong></p></div></a>
        </div>
<br/><br/>
<br/>
        <div className='carousels'>
          <div className='carousels_flex'>

        <Offset/>

        <div className='img_center'></div><br/><br/><br/><br/><br/>

        <Digital/>
        <div className='img_center2'></div><br/><br/><br/><br/><br/>
        <Graficos/>
        </div>
        </div>
        </div>
    
  )
}

export default Inicio