import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

import { ISubNavList } from "../../Interfaces/ISubNavList";
import NavLink from "../NavLink";

const SubNavList: FC<ISubNavList> = ({ navSubMenuItems }) => {

  return (
    <>
      {
        navSubMenuItems?.map(item => {
          return (
            <NavLink isSection={false} key={uuidv4()} className="SubMenu" path={item.path}>
              <p>{ item.title }</p>
            </NavLink>
          )
        })
      }
    </>
  )
}

export default SubNavList;