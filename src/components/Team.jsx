import React from 'react'
import Heading from '../common/Heading'
import { TEAM_LIST } from '../utils/helper'

const Team = () => {
  return (
    <div id='team' className='bg-team-bg-img bg-no-repeat bg-cover bg-center'>
      <div className="container max-w-[1358px] xl:pt-[137px] lg:pt-24 sm:pt-20 pt-16 xl:pb-[103px] md:pb-16 pb-12 mx-auto max-xl:px-4">
        <Heading text="Team" myClass=" text-center mx-auto pb-[88px]" />
        <div className="flex items- justify-center gap-6 flex-wrap">
          {TEAM_LIST.map((obj, i) => (
            <div key={i} className='bg-gradient-to-r from-[#B62AFF80] to-[#FF0DF280] p-[1px] rounded-[25px]'>
              <div className="bg-smoke-white px-14 pb-5 rounded-[25px] h-full w-full">
                <img className='-translate-y-[36px] w-full -mb-4' src={obj.image} alt="team member" />
                <p className='text-custom-4xl max-md:text-3xl max-sm:text-2xl text-center sm:pb-3 pb-1'>{obj.heading} </p>
                <p className='text-custom-2xl max-sm:text-lg font-comic text-center '>{obj.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team