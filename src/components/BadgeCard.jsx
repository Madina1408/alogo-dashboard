import React from 'react'
import BadgeCardData from './BadgeCardData'
function BadgeCard() {
  return (
    <div>
      {BadgeCardData.map((val, key) =>{
        return(
          <div key={key}>
            <p className='text-[18px] font-bold'>{val.badgeName}</p>
            <p className='text-[10px]'>Earned by: {val.earned} users</p>
            <p className='text-xs text-orange-600 text-[10px]'>Last earned: {val.lastEarned}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BadgeCard