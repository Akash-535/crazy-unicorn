import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const News = () => {
  return (
    <div>
      <div id='team' className='bg-team-bg-img bg-no-repeat bg-cover bg-center'>
        <div className="container max-w-[1358px] xl:pt-[137px] lg:pt-24 sm:pt-20 pt-16 xl:pb-[103px] md:pb-16 pb-12 mx-auto max-xl:px-4">
          <Heading text="Sign up for the latest news" myClass=" text-center mx-auto" />
          <Description text="Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit." myClass=" text-center max-w-[659px] font-comic mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default News