// // import React, { useState } from 'react'
// import ChatBot from "react-simple-chatbot";
// // import { ThemeProvider } from 'styled-components';

// const ChatBoxContainer = () => {

//     // const [isOpen, setOpen] = useState(false)

//     // const theme = {
//     //     background: '#f5f8fb',
//     //     fontFamily: 'Helvetica Neue',
//     //     headerBgColor: '#EB595A',
//     //     headerFontColor: '#fff',
//     //     headerFontSize: '20px',
//     //     botBubbleColor: '#EB595A',
//     //     botFontColor: '#fff',
//     //     userBubbleColor: '#fff',
//     //     userFontColor: '#4a4a4a',
//     //   };


//     const steps = [
//         {

//             id: "Greet",
//             message: "Hola, bienvenido a leaf social",
//             trigger: "Done",
//         },
//         {

//             id: "Done",
//             message: "Cuentanos cual es tu nombres",
//             trigger: "waiting1",
//         },
//         {

//             id: "waiting1",

//             user: true,

//             trigger: "Name",

//         },
//         {

//             id: "Name",

//             message: "Es un placer '{previousValue}', Por favor, selecciona cual departamento te gustaria conectarte",

//             trigger: "issues",

//         },
//         {

//             id: "issues",

//             options: [

//                 {
//                     value: "React",label: "React", trigger: "React",
//                 },

//                 { 
//                     value: "Angular", label: "Angular", trigger: "Angular"
//                 },
//                 { 
//                     value: "ejemplo", label: "ejemplo", trigger: "ejemplo"
//                 },
//                 { 
//                     value: "Ventas", label: "Ventas", trigger: "Ventas"
//                 },

//             ],

//         },

//         {

//             id: "React",

//             message:

//                 "Este es el correo para que puedas comunicarte con {previousValue}, nuestro equipo se pondra en contacto en breves con vos",

//             end: true,

//         },

//         {

//             id: "Angular",
//             message:
//                 "Este es el correo para que puedas comunicarte con {previousValue}, nuestro equipo se pondra en contacto en breves con vos",
//             end: true,

//         },
//         {

//             id: "Ventas",
//             message:
//                 "'prueba.gg@gmail.com' Es el correo para que puedas comunicarte con {previousValue}, nuestro equipo se pondra en contacto en breves con vos",
//             end: true,

//         },
//         {

//             id: "ejemplo",
//             message:
//                 " 'prueba.gg@gmail.com' Este es el correo para que puedas comunicarte con {previousValue}, nuestro equipo se pondra en contacto en breves con vos",
//             end: true,

//         },

//     ];

//     return (
//          <ChatBot className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" steps={steps}  />
//     //     <ThemeProvider theme={theme}>
//     //         <ChatBot className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" steps={steps} />
//     //   </ThemeProvider>
//     )
// }

// export default ChatBoxContainer