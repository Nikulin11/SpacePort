import React from 'react';
import styles from './breadсrumbs.css';
import { EColors, Text } from '../../Text';
import { SelectLanguage } from './SelectLanguage';

export function BreadСrumbs() {
  let userLang = navigator.language; 
  localStorage.setItem('user-language', userLang);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadCrumbs}>
        <div>
          <span>
            <a className={styles.link} href="#">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.5H2C1.44772 11.5 1 11.0523 1 10.5V5.94536C1 5.66188 1.12032 5.39171 1.33104 5.20207L5.33104 1.60207C5.71134 1.25979 6.28866 1.25979 6.66897 1.60207L10.669 5.20207C10.8797 5.39171 11 5.66188 11 5.94536V10.5C11 11.0523 10.5523 11.5 10 11.5Z" stroke="#3A3A3A"/>
              </svg>
            </a>
          </span>
          <span className={styles.separator}>—</span>
          <span>
            <a className={styles.link} href="#"><Text size={14} color={EColors.gray93}>Сотрудничество Stoking</Text></a>
          </span>
        </div>
        <div className={styles.languages}>
          <Text size={14}>Выберите язык:</Text>
          <SelectLanguage />
        </div>
      </div>
    </div>
  );
}
