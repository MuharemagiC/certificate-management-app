import { IoHome, IoMenu } from 'react-icons/io5'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'



export const HeaderSideBarData = [
  {
    title: 'Start',
    path: '/',
    icon: <IoHome />
  },
  {
    title: 'Machine Learning',
    path: null,
    icon: <IoMenu />,
    iconOpened: <RiArrowUpSFill />,
    iconClosed: <RiArrowDownSFill />,
    subNavs: [
      {
        title: 'Example 1',
        path: '/example1'
      },
      {
        title: 'Example 2',
        path: '/example2'
      },
      {
        title: 'Example 3',
        path: '/example3'
      },
    ]
  }
]