import React from 'react';
import styles from './header.css';
import { ThreadTitle } from './ThreadTitle';
import { Search } from './Search';
import { Contacts } from './Contacts';
import { HeaderList } from './HeaderList';
import { Menu } from './Menu';

export function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
  });

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerInner}>
          <ThreadTitle />
          <Menu />
          <Search />
          <Contacts />
          <HeaderList currentWidth={width} />
        </div>
      </div>
    </header>
  );
}
