import React from 'react';
import styles from './footer.css';
import { EColors, Text, Tsizes } from '../Text';
import { merge } from '../../utils/js/merge';
import { GenericList } from '../GenericList';
import { generateId } from '../../utils/react/generateRandomIndex';

const menuItemStyle = styles.menuItem;

const FOOTERMENU = [
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Сотрудничество',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Доставка и возврат',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Оплата',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Контакты',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Публичная оферта',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    textProps: {
      text: 'Политика конфиденциальности',
      size: 14 as Tsizes,
      color: EColors.gray90
    }
  },
].map(generateId)

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <ul className={styles.menuItemsList}>
            {
              <GenericList list={FOOTERMENU.map(merge({ onClick: () => console.log('1') }))} />
            }
        </ul>
        </div>
        <div className={styles.created}>
          <a className={styles.company} href="#">ООО «Хитинвест»</a>
          <Text As='span' size={12}> by </Text>
          <a href="#" target='_blanc'>Spaceport</a>
          <Text As='span' size={12}> 2022</Text>
        </div>
      </div>
    </footer>
  );
}
