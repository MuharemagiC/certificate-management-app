import { ReactElement } from "react";

export interface IHeaderSubMenu {
  item: IMenu,
}

export interface IMenu {
  title: string,
  path: string | null,
  icon: ReactElement,
  iconOpened?: ReactElement
  iconClosed?: ReactElement,
  subNavs?: ISubMenu[]
}

export interface ISubMenu {
  title: string,
  path: string
}