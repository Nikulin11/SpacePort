import React, { useEffect, useState } from 'react';
import styles from './brands.css';
import axios from 'axios';
import { EColors, Text } from '../../Text';
import brandsIcon from '../../../images/brands.svg';
import { Button } from '../../Button';

export function Brands() {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const {data: {items} } = await axios.get('https://api.stoking.ru/v1/brands?selection[filter]=[%7B%22id%22:%22used%22,%22value%22:1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal');
        setBrands(items);
      } catch (error) {
        console.log(error);
      }
    }

    load();
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.brandsBlock}>
        <div className={styles.textBlock}>
          <div className={styles.title}>
            <img src={brandsIcon} alt="" />
            <Text size={24} mobileSize={16} color={EColors.orange} weight='bold700'>91 бренд</Text>
          </div>
          <Text As='div' size={14}>Официальный дилер мировых брендов-производителей.</Text>
          <div className={styles.buttonBlock}>
            <Button 
              textProps={{text: 'Стать продавцом на Stoking', size: 12, mobileSize: 14, color: EColors.white}}
              padding='padding-lg'
            />
          </div>
        </div>
        <div className={styles.brandsWrapper}>
          <div className={styles.boxShadow}></div>
          <div className={styles.brands}>
            {brands.map(brand => {
              return (
                <div key={brand.id} className={styles.brand}>
                  <img src={brand.thumbnail.path} alt="" />
                </div>
              )
            })}
          </div>
          <div className={styles.boxShadow}></div>
        </div>
      </div>
    </div>
  );
}
