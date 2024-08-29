import React from 'react'

export const Header = () => {
  return (
    <div className='relative h-full'>
      {/* <img src="/homePage/header.png" alt="header" title='women' /> */}
      <video className="object-cover w-full" autoPlay loop muted>
        <source src="/images/homePage/header.mp4" type="video/mp4"/>
        <p>Tu navegador no admite la etiqueta video</p>
      </video>
      {/* <p className='text-8xl absolute text-white top-10 font-Baskervville max-w-[900px]'>Encuentra tu equilibrio en Hair Spa Sano</p>  */}
    </div>
  )
}
