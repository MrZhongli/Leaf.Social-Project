

import React from "react";
import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, LinkedinShareButton, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon} from "react-share";


const BlogProduct = (props) => {
  const { title, id, img, content, slug } = props.product
  const currentUrl = `https://leaf-social-project.vercel.app/blog/${id}`
  //
  return (
    <>
      <Link to={`/blog/${slug}`}>
        <div className="card w-96  bg-white shadow-xl">
          <figure><img src={img} alt="imagen-blog w-96 h-96" /></figure>
          <div className="card-body">
            <h2 className="card-title text-left text-black">{title} </h2>
            <p className="text-sm max-w-full text-left my-2 py-2 text-black">{content}</p>
            <div className="card-actions justify-end">

              <ul className=" bg-slate-400 w-72 p-2 rounded-box flex ">

                <FacebookShareButton url={currentUrl} quote={content} >
                  <FacebookIcon logoFillColor="white" round="true" size={36} />
                </FacebookShareButton>

                <FacebookMessengerShareButton url={currentUrl} redirectUri={currentUrl}>
                  <FacebookMessengerIcon logoFillColor="white" round="true" size={36} />
                </FacebookMessengerShareButton>

                <LinkedinShareButton>

                </LinkedinShareButton>

                <WhatsappShareButton url={currentUrl} title={title}>
                  <WhatsappIcon logoFillColor="white" round="true" size={36} />
                </WhatsappShareButton>

                <PinterestShareButton description={title} url={currentUrl}>
                  <PinterestIcon logoFillColor="white" round="true" size={36} />
                </PinterestShareButton>

                <TelegramShareButton title={title} url={currentUrl}>
                  <TelegramIcon logoFillColor="white" round="true" size={36} />
                </TelegramShareButton>

                <TwitterShareButton title={title}>
                  <TwitterIcon logoFillColor="white" round="true" size={36} />
                </TwitterShareButton>

              </ul>

            </div>
          </div>
        </div>
      </Link>

    </>
  );
}

export default BlogProduct;