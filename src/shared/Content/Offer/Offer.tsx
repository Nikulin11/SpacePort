import React from 'react';
import styles from './offer.css';
import { EColors, Text } from '../../Text';
import { Button } from '../../Button';
import banner from '../../../images/banner.svg'

export function Offer() {
  return (
    <section className={styles.offer}>
      <div className={styles.wrapper}>
        <Text As='h1' size={26} mobileSize={16}>Stoking — маркетплейс промышленного оборудования</Text>
        <div className={styles.text}>
          <Text As='p' size={16} mobileSize={14}>Владеете складом промышленного оборудования или производите его?</Text>
          <Text As='p' size={16} mobileSize={14}>Начни продавать уже сейчас.</Text>
        </div>
        <div className={styles.buttonBlock}>
          <Button 
            textProps={{text: 'Стать продавцом на Stoking', size: 12, mobileSize: 14, color: EColors.white}}
            padding='padding-lg'
          />
        </div>
        <div className={styles.banner}>
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
}
