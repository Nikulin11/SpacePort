import React from 'react';
import styles from './icon.css'

interface IFavoritesIconProps {
  size: number;
}

export function FavoritesIcon({size}: IFavoritesIconProps) {
  return (
    <svg className={styles[size]} width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 19.9554C16 20.7875 15.0429 21.2556 14.3861 20.7447L8.5 16.1667L2.61394 20.7447C1.95708 21.2556 1 20.7875 1 19.9554V3.33333C1 2.71449 1.22576 2.121 1.62763 1.68342C2.02949 1.24583 2.57454 1 3.14286 1H13.8571C14.4255 1 14.9705 1.24583 15.3724 1.68342C15.7742 2.121 16 2.71449 16 3.33333V19.9554Z" stroke="#838383" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
