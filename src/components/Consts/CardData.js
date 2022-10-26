import React from 'react'
import { FiUsers } from 'react-icons/fi'
import {ImStatsDots} from 'react-icons/im'
import {HiOutlineBadgeCheck} from 'react-icons/hi';
import {MdCardGiftcard} from 'react-icons/md';
import {RiPriceTag3Line} from 'react-icons/ri';

const CardData = [
  {
    id: 1,
    image: <FiUsers/>,
    number: 200,
    performanceType: 'New User',
    statistics: '6.8% from yesterday',
    monthlyData: '180 reward from last month'
  },
  {
    id: 2,
    image: <ImStatsDots/>,
    number: 200,
    performanceType: 'Users Engagement',
    statistics: '6.8% from yesterday',
    monthlyData: '100 interactions last month',
    alt: 'uprising arrow'
  },
  {
    id: 3,
    image: <HiOutlineBadgeCheck/>,
    number: 200,
    performanceType: 'Badges Earned',
    statistics: '6.8% from yesterday',
    monthlyData: '100 badge last month'
  },
  {
    id: 4,
    image: <MdCardGiftcard/>,
    number: 200,
    performanceType: 'Rewards Earned',
    statistics: '6.8% from yesterday',
    monthlyData: '180 reward from last month',
    alt: 'badge'
  },
  {
    id: 5,
    image: <RiPriceTag3Line/> ,
    number: 200,
    performanceType: 'Points Earned',
    statistics: '6.8% from yesterday',
    monthlyData: '100K point from last month',
    alt: 'point/pricetag'
  }
]

export default CardData;