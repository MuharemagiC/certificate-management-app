import { FC } from 'react'

import HeaderStyle from './HeaderStyle.module.css'
import { HeaderSideBarData } from './HeaderSideBarData';
import { IHeader } from '../../Interfaces/IHeader';
import NavList from '../NavList';

const Header: FC<IHeader> = ({ children }) => {

  return (
    <>
      <section className={HeaderStyle["Header-Wrapper"]}>
        <section className={HeaderStyle["Header-Aside"]}>
          <h1 className={HeaderStyle["Header-Logo"]}>DCCS TUZLA</h1>
          <section className={HeaderStyle["Header-Icons"]}>
            {
              <NavList navMenuItems={HeaderSideBarData} />
            }
          </section>
        </section>
      </section>
      <section className={HeaderStyle["Header-Page"]}>
        { children }
      </section>
    </>
  )
}

export default Header;
