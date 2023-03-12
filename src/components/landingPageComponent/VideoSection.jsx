import React from 'react'

const VideoSection = () => {
  return (
      <div className="md:hero lg:hero xl:hero max-sm:py-20 min-h-screen bg-white" >
          <div className=" text-center">
              <div className="flex flex-col justify-center">
                  <h1 className="text-5xl font-bold" style={{color:`#1D2433`}}>¿Querés ver cómo hacemos lo que hacemos?</h1>
                  <iframe className=' m-5 rounded-lg h-96 mt-10' src="https://www.youtube.com/embed/zTs9pFFMHcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
      </div>
  )
}

export default VideoSection