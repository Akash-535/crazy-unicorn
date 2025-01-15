import React from 'react'

const Heading = ({text , myClass , textTwo , myClassTwo}) => {
  return (
    <>
    <h2 className={`text-custom-7xl font-normal leading-custom-lg relative${myClass}`}>{text}</h2>
    <h3 className={`text-custom-4xl font-normal leading-custom-lg relative${myClassTwo}`}>{textTwo}</h3>
    </>
  )
}

export default Heading