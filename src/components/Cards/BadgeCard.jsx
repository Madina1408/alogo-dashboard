import React from 'react'
import BadgeCardData from '../../components/Consts/BadgeCardData'
function BadgeCard() {
  return (
    <div>
      {BadgeCardData.map((val, key) =>{
        return(
          <div key={key}>
            <p className='text-md font-bold'>{val.badgeName}</p>
            <p className='lg:text-sm text-[0.725rem]'>Earned by: {val.earned} users</p>
            <p className='lg:text-xs text-[0.725rem] text-orange-600 t'>Last earned: {val.lastEarned}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BadgeCard