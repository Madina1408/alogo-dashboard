import React from 'react'
import Home from '../../assets/SidebarImages/home.svg';
import User from '../../assets/SidebarImages/users.svg'
import Badge from '../../assets/SidebarImages/badge.svg';
import Reward from '../../assets/SidebarImages/rewards.svg'
import Point from '../../assets/SidebarImages/points.svg'
import Ticket from '../../assets/SidebarImages/tickets.svg'
import System from '../../assets/SidebarImages/systems.svg'
export const SidebarData = [
  {
    title:"Dashboard",
    icon:<img src={Home}/>,
    link:'/dashboard'
  },
  {
    title:"Users",
    icon:<img src={User}/>,
    link:'/users'
  },
  {
    title:"Badges",
    icon:<img src={Badge} />,
    link:'/badge'
  },
  {
    title:"Rewards",
    icon:<img src={Reward} />,
    link:'/reward'
  },
  {
    title:"Points",
    icon:<img src={Point} />,
    link:'/point'
  },
  {
    title:"Tickets",
    icon:<img src={Ticket}/>,
    link:'/ticket'
  },
  {
    title:"Systems",
    icon:<img src={System} />,
    link:'/system'
  },
]

