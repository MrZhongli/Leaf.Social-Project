import React, { useRef, useState } from 'react'
import Navbar from './NavBar/NavBarTwo'
import './styles/styles.css'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputForm from './InputValidation/InputForm';

const ContactContainer = () => {
  
  const [Nombre, setNombre] = useState({campo:'', valido: null})
  const [Asunto, setAsunto] = useState({campo:'', valido: null})
  const [Email, setEmail] = useState({campo:'', valido: null})
  const [FormularioValido, setFormularioValido ] = useState(null)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(
      Nombre.valido === 'true' &&
      Asunto.valido === 'true' &&
      Email.valido === 'true' 
    ){
      setFormularioValido(true)
      emailjs.sendForm(
        'service_xo8dfke',
        'template_qpii7sl',
        form.current,
        'F3848BbavDZHYILLD')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset()
    }else if (
      Nombre.valido === 'null' ||
      Asunto.valido === 'null' ||
      Email.valido === 'null' 
    ){
      setFormularioValido(null)
      console.log('No se ha llenado el formulario')
    }else{
      setFormularioValido(false)
    }
  };

  const expresiones = {
    // usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    // password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  return (
    <>
      <Navbar />
      <form ref={form} onSubmit={sendEmail} className="flex-col">

        <div className="hero bg-slate-200 h-screen  ">
          <div className='flex flex-col justify-center align-center'>
            <div>
              <h1 className='text-black text-4xl mb-3'>Contactanos</h1>
              <p className='w-96 text-md font-light'>Si tiene alguna pregunta o comentario, no dude en comunicarte con nosotros. Siempre estamos disponible para ayudar</p>
            </div>
            <div className='flex flex-col align-center justify-center'>
              {/* input */}
              <InputForm
                estado={Nombre}
                setEstado={setNombre}
                Label='Nombre y apellido'
                tipo="text"
                placeholder="Escribe tu nombre"
                name="name"
                expresionRegular={expresiones.nombre}
              />
              {/* asunto */}
              <InputForm
                estado={Asunto}
                setEstado={setAsunto}
                Label='Asunto'
                tipo="text"
                placeholder="Escribe el asunto"
                name="asunto"
                expresionRegular={expresiones.nombre}
              />
              <InputForm
                estado={Email}
                setEstado={setEmail}
                Label='Email'
                tipo="text"
                placeholder="Escribe tu correo"
                name="email"
                expresionRegular={expresiones.correo}
              />
              {/* text message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-stone-900">Escribenos tu consulta</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Escribe tu nombre"
                  className="input input-bordered bg-white"
                  name="message" />
              </div>
            </div>
            {/* btn submit */}
            <div className="form-control mt-6">
              <input className=" mt-10 btn  bg-orange text-white" type="submit" value="Enviar" />
            </div>
            {/* <button className=' mt-10 btn  bg-orange text-white'>Enviar</button> */}
            {
              FormularioValido === true &&
              <div className="alert alert-success shadow-lg mt-20">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Su mensaje ha sido enviado!</span>
                </div>
              </div>
            }
            {
              FormularioValido === false &&
              <div className="alert alert-error shadow-lg mt-5 ">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Error! Complete correctamente el formulario.</span>
                </div>
              </div>
            }
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactContainer