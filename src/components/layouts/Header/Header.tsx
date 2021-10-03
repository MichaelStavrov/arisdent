import React, { FC, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Container from '../Container';
import classes from './Header.module.css';
import ContactsComponent from '../../ContactsComponent';
import Logo from '../../Logo';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  document.addEventListener('click', (e) => {
    setShowMenu(false);
  });

  const handleBtnBurgerMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowMenu(true);
  };

  const itemsNav = useMemo(
    () => [
      { id: 1, name: 'О клинике', path: '/' },
      { id: 2, name: 'Врачи', path: '/staff' },
      { id: 3, name: 'Цены', path: '/prices' },
      { id: 4, name: 'Контакты', path: '/contacts' },
    ],
    []
  );

  return (
    <header className={classes.headerWrapper}>
      {showMenu && <div className={classes.substrate} />}
      <Container>
        <div className={classes.header}>
          <Logo />
          <nav
            className={cn(classes.navigation, {
              [classes.popperMenu]: showMenu,
            })}
          >
            <div className={classes.menuLogo}>
              <Logo menuView />
            </div>
            <ul className={classes.navList}>
              {itemsNav.map(({ id, name, path }) => (
                <li
                  className={cn(classes.navItem, {
                    [classes.itemNavActive]:
                      location.pathname === path && !showMenu,
                  })}
                  key={id}
                >
                  <Link to={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={classes.contacts}>
            <ContactsComponent dir='vertical' />
          </div>
          <button
            className={classes.btnBurgerMenu}
            type='button'
            onClick={handleBtnBurgerMenuClick}
          >
            <span className={classes.strip} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
