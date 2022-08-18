import { FC } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import { INavLink } from "../../interfaces/INavLink";
import NavLinkStyle from './NavLinkStyle.module.css'

const NavLink: FC<INavLink> = ({ isSection, children, path, subNavs, showSubnav, className }) => {

  const createClassNameDependsOnActiveState = () => ({ isActive }: any) => {
    return isActive ? `${NavLinkStyle[className]} ${NavLinkStyle["Active"]}` : NavLinkStyle[className]
  }

  return (
    <>
      {
        !isSection ? (
            <RouterNavLink to={path || "/"} className={createClassNameDependsOnActiveState()}>
              { children }
            </RouterNavLink>
        ) : (
            <section className={NavLinkStyle["Icons"]}  onClick={subNavs && showSubnav}>
              { children }
            </section>
        )
      }
    </>
  )
}

export default NavLink;