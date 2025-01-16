import React from 'react'

const Description = ({text,myClass , textTwo , myClassTwo}) => {
  return (
    <>  
    <p className={`text-custom-2xl font-normal leading-custom-5xl max-md:text-lg font-comic max-sm:text-base ${myClass}`}>{text}</p>
    <p className={`text-lg font-normal leading-custom-6xl max-md:text-base font-comic max-sm:text-sm ${myClassTwo}`}>{textTwo}</p>
    </>
    
  )
}

export default Description