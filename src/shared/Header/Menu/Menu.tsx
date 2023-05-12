import React from 'react';
import styles from './menu.css';
import { Button } from '../../Button';
import { EColors, Tsizes } from '../../Text';
import { Dropdown } from '../../Dropdown';

const MENU = {
  menu: true,
  textProps: {
    text: 'Каталог',
    size: 12 as Tsizes,
    color: EColors.white
  },
  padding: 'padding-sm'
}

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown 
        button={
          <Button 
          menu={true} 
          textProps={{text: 'Каталог', size: 12 as Tsizes, color: EColors.white}}
          padding='padding-sm'/>
        }>
        <div className={styles.dropdown}>
          <img src='https://vsememy.ru/wp-content/cache/thumb/e30d60cb4_320x200.jpg' alt="" />
        </div>
      </Dropdown>
    </div>
  );
}
