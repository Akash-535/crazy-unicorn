import React from 'react'
import Heading from '../common/Heading'
import { TEAM_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div id='team' className='bg-team-bg-img bg-no-repeat bg-cover bg-center'>
      <div className="container max-w-[1320px] xl:py-[83px] lg:py-16 pt-12 mx-auto max-xl:px-4">
        <Heading text="Team" myClass=" text-center mx-auto pb-[88px]" />
        <div className="flex items-center justify-between">
          {TEAM_LIST.map((obj,i)=>(
         <div key={i} className='bg-gradient-to-r from-[#B62AFF80] to-[#FF0DF280] p-[1px] rounded-[25px]'>
             <div className="bg-smoke-white px-14 pb-5 rounded-[25px]">
              <img className='-translate-y-[36px]' src={obj.image} alt="team member" />
              <p className='text-custom-4xl text-center pb-3'>{obj.heading} </p>
              <p className='text-custom-2xl text-center '>{obj.description} </p>
            </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team