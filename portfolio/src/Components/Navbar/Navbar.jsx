import React, { useState } from 'react';
import styles from './Navbar.module.css';
import menu from '../../Assests/png menu.png';
import closeMenu from '../../Assests/close.png';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={showMenu ? closeMenu : menu}
          alt='menu button'
          width={"35px"}
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul
          className={`${styles.menuItems} ${showMenu && styles.MenuOpen}`}
          onClick={() => setShowMenu(false)}
        >
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

