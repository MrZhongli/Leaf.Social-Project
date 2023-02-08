import React from 'react'
import { FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, LinkedinShareButton, WhatsappShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, TwitterIcon, TelegramIcon, PinterestIcon, WhatsappIcon} from "react-share";

const ItemDetail = ({item}) => {

  const currentUrl = `https://leaf-social-project.vercel.app/blog/${item.id}`

  return (
    
    <div className="hero min-h-screen bg-white ">
      <div className=" flex-col lg:flex-row  ">
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
              <li><a>Item 3</a></li>
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