import React from 'react'

const Heading = ({text , myClass , textTwo , myClassTwo}) => {
  return (
    <>
    <h2 className={`text-custom-7xl font-normal leading-custom-lg max-lg:text-6xl max-md:text-4xl max-sm:text-3xl ${myClass}`}>{text}</h2>
    <h3 className={`text-custom-4xl font-normal leading-custom-lg max-lg:text-4xl max-md:text-3xl max-sm:text-2xl ${myClassTwo}`}>{textTwo}</h3>
    </>
  )
}

export default Heading