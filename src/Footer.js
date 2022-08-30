import React from 'react'
import './footer.css'
import certificado from "./img/TR-Testmark_9000014797_ES_CMYK_with-QR-Code-1024x378.jpg"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_flex'>
          <div className='certificado'>
          <img src={certificado} alt="certificado"></img>
          </div>
          <div>

          </div>
      </div>
        <div className='footer2'>
          <p>@ Sifra Impresores S.A. DE C.V. &nbsp;  |  &nbsp; Todos los derechos reservados</p>
        </div>
      </div>
  )
}

export default Footer