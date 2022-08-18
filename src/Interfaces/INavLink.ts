import { ISubMenu } from "./IHeaderSubMenu";

export interface INavLink {
  children?: any,
  isSection: boolean,
  path?: string,
  className: string,
  subNavs?: ISubMenu[] | undefined,
  showSubnav?: () => void
}