

import React, { useState, useEffect } from "react";

const BlogProduct = (props) => {
  const { title, id, img, content } = props.product
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const timesVisit = localStorage.getItem('timesVisit');
  //   if (timesVisit) {
  //     setCount(timesVisit);
  //   }
  // }, []);
  // const increment = () => {
  //   setCount(prevState => prevState + 1);
  //   localStorage.setItem('timesVisit', (prevTimesVisit) => prevTimesVisit + 1);
  // };
  return (
    <>
    {/* <div className="border-black border-2 w-2/3 flex md:flex-row lg:flex-row xl:flex-row bg-white rounded-lg shadow-lg py-4 m-auto" >
      <img className="h-48 w-auto sm:h-64 md:h-64 lg:h-64 xl:h-64 rounded-lg flex-none bg-cover rounded-t-lg" src={img} alt="card image" />
      <div className=" flex flex-col justify-between border-r-2 border-black pl-4 pr-6">
        <h3 className="text-5xl font-semibold">{title} </h3>
        <p className="mt-2   rounded">haz click para dar más.</p>
        <p className="p-2 rounded bg-gray-200">This card has been opened {count} times.</p>
      </div>
    </div> */}
    {/* otra parte */}
    <div className="card lg:card-side bg-base-100 shadow-xl m-auto mt-20 mb-20 max-w-max">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-sm max-w-full">{content}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">ver mas</button>
    </div>
  </div>
</div>
    </>
  );
}

export default BlogProduct;