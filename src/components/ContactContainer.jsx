import React, { useRef, useState } from 'react'
import Navbar from './NavBar/NavBarTwo'
import './styles/styles.css'


const ContactContainer = () => {
  
  const [Nombre, setNombre] = useState({campo:'', valido: null})
  const [Numero, setNumero] = useState({campo:'', valido: null})
  const [Email, setEmail] = useState({campo:'', valido: null})
  const [FormularioValido, setFormularioValido ] = useState(null)
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if(
  //     Nombre.valido === 'true' &&
  //     Numero.valido === 'true' &&
  //     Email.valido === 'true' 
  //   ){
  //     setFormularioValido(true)
  //     emailjs.sendForm(
  //       'service_68l7gv8',
  //       'template_ggb6i5g',
  //       form.current,
  //       'JM88aFLaBVIWQyB4g')
  //       .then((result) => {
  //         console.log(result.text);
  //       }, (error) => {
  //         console.log(error.text);
  //       });
  //   e.target.reset()
  //   }else if (
  //     Nombre.valido === 'null' ||
  //     Numero.valido === 'null' ||
  //     Email.valido === 'null' 
  //   ){
  //     setFormularioValido(null)
  //     console.log('No se ha llenado el formulario')
  //   }else{
  //     setFormularioValido(false)
  //   }
      
    
  // };
  

  const expresiones = {
    // usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    // password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  return (
    <>
    <Navbar/>
      <div className="hero bg-slate-200 h-screen  ">
        <div className='flex flex-col justify-center align-center'>
          <div>
            <h1 className='text-black text-4xl mb-3'>Contactanos</h1>
            <p className='w-96 text-md font-light'>Si tiene alguna pregunta o comentario, no dude en comunicarte con nosotros. Siempre estamos disponible para ayudar</p>
          </div>
          <div className='flex flex-col align-center justify-center'>
            {/* input */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Nombre Completo</span>
                
              </label>
              <input type="text" placeholder="Escribe aquí" className="input input-bordered bg-white" />
             
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Correo Electronico</span>
              </label>
              <input type="text" placeholder="Escribe aquí" className="input input-bordered bg-white" />
            </div>
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Deja tu mensaje</span>
              </label>
              <textarea type="text" placeholder="Escribe aquí" className="input input-bordered bg-white" />
            </div>
          </div>
          <button className=' mt-10 btn  bg-orange'>Enviar</button>
        </div>
      </div>
    </>
  )
}

export default ContactContainer