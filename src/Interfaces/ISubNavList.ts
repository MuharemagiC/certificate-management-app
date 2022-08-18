import { ReactElement } from 'react'

import { ISubMenu } from './IHeaderSubMenu'

export interface ISubNavList {
  navSubMenuItems: ISubMenu[] | undefined,
  children?: ReactElement | ReactElement[]
}