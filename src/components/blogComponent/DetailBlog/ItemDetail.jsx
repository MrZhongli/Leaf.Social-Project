import React from 'react'
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, LinkedinShareButton, WhatsappShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, TwitterIcon, TelegramIcon, PinterestIcon, WhatsappIcon, EmailShareButton, EmailIcon} from "react-share";
import Arrow_leaf from '../../../assets/Others/Arrow_leaf';
import '../../styles/styles.css'

const ItemDetail = ({item}) => {

  const currentUrl = `https://leaf-social-project.vercel.app/blog/${item.id}`

  return (
    
    <div className="hero min-h-screen bg-white ">
      <div className=" flex-col lg:flex-row  ">
      <Link to="/Productos">
      <div className='btn-ghost bg-white absolute mt-10 max-sm:mx-10 mx-20  w-14 h-14 border-2  flex justify-center rounded-full z-10' >
      <Arrow_leaf className=" mt-4 " />
      </div>
      </Link>
        <img src={item.img} alt="blog-imagen" className="rounded mb-20 h-96 w-screen"/>   
        <div className="lg:mx-20 xl:mx-20 m-10">
          <h1 className="text-5xl font-bold text-stone-900 my-10 text-left">{item.title}</h1>

          <p className="py-6 text-stone-900 text-left montserrat text-justify">{item.content}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.secondContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.thirdContent}</p>
          <p className="py-2 text-stone-900 text-left montserrat">{item.forthContent}</p>

          {/* <span className="py-6 text-stone-900">cantidad disponible: {item.stock} </span> */}
          {/* <h2 className='m-20 text-stone-900'>Precio {item.price} </h2> */}
        <div>
          <ul className=" bg-slate-400 w-72 p-2 rounded-box flex ">

              <FacebookShareButton url={currentUrl} quote={item.slug} >
                <FacebookIcon logoFillColor="white" round="true" size={36} />
              </FacebookShareButton>

              <FacebookMessengerShareButton url={currentUrl} redirectUri={currentUrl}>
                <FacebookMessengerIcon logoFillColor="white" round="true" size={36} />
              </FacebookMessengerShareButton>

              <LinkedinShareButton>
              
              </LinkedinShareButton>

              <WhatsappShareButton url={currentUrl} title={item.title}>
                <WhatsappIcon logoFillColor="white" round="true" size={36}/>
              </WhatsappShareButton>

              <PinterestShareButton description={item.title} url={currentUrl}>
                <PinterestIcon logoFillColor="white" round="true" size={36} />
              </PinterestShareButton>

              <TelegramShareButton title={item.title} url={currentUrl}>
                <TelegramIcon logoFillColor="white" round="true" size={36}/>
              </TelegramShareButton>

              <TwitterShareButton title={item.title}>
                <TwitterIcon logoFillColor="white" round="true" size={36} />
              </TwitterShareButton>

              <EmailShareButton subject="Consulta" body="Comuniquese a este url" url="kaka@leaf.com">
                <EmailIcon logoFillColor="white" round="true" size={36}/>
              </EmailShareButton>
          </ul>
        </div>
         

          <div className="mt-10">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail