import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

import { INavList } from "../../interfaces/INavList";
import HeaderSubMenu from "../Header/HeaderSubMenu";

const NavList: FC<INavList> = ({ navMenuItems }) => {

  return (
    <>
      {
        navMenuItems.map(item => {
          return (
            <HeaderSubMenu item={item} key={uuidv4()} />
          )
        })
      }
    </>
  )
}

export default NavList;