

import React from "react";
import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, LinkedinShareButton, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon} from "react-share";

const BlogProduct = (props) => {
  const { title, id, img, content, slug } = props.product
  const currentUrl = `https://leaf-social-project.vercel.app/blog/${id}`
  //
  return (
    <>
      
      <div className="card rounded-none flex  lg:card-side bg-slate-100 shadow-xl ms-5 mt-20 mb-20 max-w-max md:w-1/2 m-auto ">
        <figure><img src={img} alt="Album" className="h-96 lg:w-screen" /></figure>
          
        <div className="card-body flex divide-y">
          <h2 className="card-title text-left text-black">{title} </h2>
          <p className="text-sm max-w-full text-left my-2 py-2 text-black">{content}</p>
          <div>

          <div className="flex justify-start absolute">
            <p className="text-sm my-5 py-2 text-left mx-2">Views</p>
            <p className="text-sm my-5 py-2 text-left">Likes</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/blog/${slug}`} className='btn  btn-primary  hover:bg-blue-600 btn-success my-4'> Ver mas</Link>
          </div>
          <div>
          <ul className=" bg-slate-400 w-72 p-2 rounded-box flex ">

              <FacebookShareButton url={currentUrl} quote={ content} >
                <FacebookIcon logoFillColor="white" round="true" size={36} />
              </FacebookShareButton>

              <FacebookMessengerShareButton url={currentUrl} redirectUri={currentUrl}>
                <FacebookMessengerIcon logoFillColor="white" round="true" size={36} />
              </FacebookMessengerShareButton>

              <LinkedinShareButton>
              
              </LinkedinShareButton>

              <WhatsappShareButton url={currentUrl} title={ title}>
                <WhatsappIcon logoFillColor="white" round="true" size={36}/>
              </WhatsappShareButton>

              <PinterestShareButton description={ title} url={currentUrl}>
                <PinterestIcon logoFillColor="white" round="true" size={36} />
              </PinterestShareButton>

              <TelegramShareButton title={ title} url={currentUrl}>
                <TelegramIcon logoFillColor="white" round="true" size={36}/>
              </TelegramShareButton>

              <TwitterShareButton title={ title}>
                <TwitterIcon logoFillColor="white" round="true" size={36} />
              </TwitterShareButton>
              
          </ul>
        </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default BlogProduct;