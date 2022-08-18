import React from "react";

import { IHeaderSubMenu } from "../../interfaces/IHeaderSubMenu";
import { useShowSubnav } from "../../hooks/useShowSubnav";
import NavLink from "../NavLink";
import SubNavList from "../SubNavList";


const HeaderSubMenu: React.FC<IHeaderSubMenu> = ({ item }) => {
  const [subnav, showSubnav] = useShowSubnav(false)

  return (
    <>
      {
        item.path ? 
        (
          <NavLink path={item.path} isSection={false} className="Icons">
            { item.icon }
            <span>{item.title}</span>
          </NavLink>
        ) : (
          <NavLink isSection={true} showSubnav={showSubnav} className="Icons" subNavs={item.subNavs}>
            { item.icon }
            <span>{item.title}</span>
            { item.subNavs && subnav ? item.iconOpened : item.subNavs ? item.iconClosed : null }
          </NavLink>
        )
      }
      { subnav &&  <SubNavList navSubMenuItems={item?.subNavs}/> }
    </>
  )
}

export default HeaderSubMenu;