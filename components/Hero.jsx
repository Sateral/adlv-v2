import React from 'react'

const Hero = ({ pageTitle, sub, image }) => {
  return (
    <div className={`flex justify-center items-center sm:flex-row flex-col bg-secondary ${image != null ? "h-[400px]" : "h-[250px]"}`} id="home">
      <div className="h-full w-full m-0 p-0 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <div className="pt-[60px] text-primary">
            <h1 className='font-jost text-[35px]'>{pageTitle}</h1>
            <h3 className='text-right text-[18px]'>{sub}</h3>
          </div>
        </div>
      </div>
      {image != null &&
      <div className="sm:h-full h-[50%] sm:w-[80%] w-full">
        <div className="h-full w-full bg-cover bg-no-repeat opacity-90" style={{backgroundImage: `url(${image.src})`, backgroundPosition: '38% center'}}></div>
      </div>
      }
    </div>
  )
}

export default Hero