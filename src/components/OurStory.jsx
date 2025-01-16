import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const OurStory = () => {
  return (
    <div className='pt-20'>
      <div className='relative text-center max-w-[295px] mx-auto'>
        <img className='max-w-[118px] absolute -top-12 -right-11' src="./assets/images/webp/little-horse-image.webp" alt="little horse" />
        <Heading text="Our Story"/>
      </div>
      <div>
        <Description text="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante." myClass="max-w-[1109px] mx-auto text-center pt-[22px]"/>
      </div>
    </div>
  )
}

export default OurStory