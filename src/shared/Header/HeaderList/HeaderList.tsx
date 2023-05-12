import React from 'react';
import styles from './headerlist.css';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { EIconsName, TIconSize } from '../../Icon/Icon';
import { merge } from '../../../utils/js/merge';
import { GenericList } from '../../GenericList';
import { Tsizes } from '../../Text';

const menuItemStyle = styles.menuItem;

const MOBILELIST = [
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.HomeIcon},
    textProps: {text: 'Главная', size: 14 as Tsizes, mobileSize: 11 as Tsizes}
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.CatalogIcon},
    textProps: {text: 'Каталог', size: 14 as Tsizes, mobileSize: 11 as Tsizes}
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.BasketIcon},
    textProps: {text: 'Корзина', size: 14 as Tsizes, mobileSize: 11 as Tsizes}
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.FavoritesIcon2},
    textProps: {text: 'Избранное', size: 14 as Tsizes, mobileSize: 11 as Tsizes}
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.ProfileIcon},
    textProps: {text: 'Профиль', size: 14 as Tsizes, mobileSize: 11 as Tsizes}
  },
].map(generateId);

const DESKTOPLIST = [
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.AppealsIcon},
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.ProfileIcon},
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.СomparisonIcon},
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.FavoritesIcon},
  },
  {
    As: 'li' as const,
    className: menuItemStyle,
    iconProps: {iconSize: 22 as TIconSize, iconName: EIconsName.BasketIcon},
  },
].map(generateId);

interface IHeaderListProps {
  currentWidth: number;
}

export function HeaderList({currentWidth}: IHeaderListProps) {
  return (
    <ul className={styles.menuItemsList}>
      {currentWidth < 760 ?
        <GenericList list={MOBILELIST.map(merge({ onClick: () => console.log('1') }))} /> 
        :
        <GenericList list={DESKTOPLIST.map(merge({ onClick: () => console.log('1') }))} />
      }
    </ul>
  );
}
