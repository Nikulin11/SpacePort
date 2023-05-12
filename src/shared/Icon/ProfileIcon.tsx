import React from 'react';
import styles from './icon.css'

interface IProfileIconProps {
  size: number;
}

export function ProfileIcon({size}: IProfileIconProps) {
  return (
    <svg className={styles[size]} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 22.0417C1 18.0886 6.5 18.0886 9.25 15.4532C10.625 14.1355 6.5 14.1355 6.5 7.54692C6.5 3.15499 8.33287 0.958374 12 0.958374C15.6671 0.958374 17.5 3.15499 17.5 7.54692C17.5 14.1355 13.375 14.1355 14.75 15.4532C17.5 18.0886 23 18.0886 23 22.0417" stroke="#838383" strokeLinecap="round"/>
    </svg>
  );
}
