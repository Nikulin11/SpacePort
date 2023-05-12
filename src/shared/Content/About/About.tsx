import React from 'react';
import styles from './about.css';
import { Text } from '../../Text';
import phoneImg from '../../../images/phone.svg'

export function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.wrapper}>
      <img className={styles.phoneImg} src={phoneImg} alt="" />
        <div className={styles.about}>
          <Text As='p' size={16} mobileSize={14}><b>Stoking</b> — маркетплейс инженерно-промышленного оборудования.</Text>
          <Text As='p' size={16} mobileSize={14}>
            Рынок промышленного оборудования изменяется. Появляются новые, качественные бренды, формируются больше склады, 
            меняется политика компаний, ускоряются процессы логистики оборудования.
          </Text>
          <Text As='p' size={16} mobileSize={14}>Стокинг это более 50 инженеров, создавших сервис-проводник в сегменте промышленного оборудования.</Text>
          <Text As='p' size={16} mobileSize={14}>Мы хотим знать что вы производите, продаете и донести это миру.</Text>
        </div>
      </div>
    </section>
  );
}
