import React from 'react';
import styles from './goods.css';
import boxIcon from '../../../images/BoxClosed.svg'
import { EColors, Text } from '../../Text';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';
import product1 from '../../../images/products/product1.svg';
import product2 from '../../../images/products/product2.svg';
import product3 from '../../../images/products/product3.svg';
import product4 from '../../../images/products/product4.svg';
import product5 from '../../../images/products/product5.svg';
import { useInView } from 'react-intersection-observer';

interface IGoods {
  id: string,
  img: string,
  title: string,
  code: string,
  price: string,
}

const GOODSDESKTOP: IGoods[] = [
  {
    id: generateRandomString(),
    img: product1,
    title: 'Насос Pedrollo JCRm 1 B -N',
    code: '46JCN1B0A1',
    price: '14 161 ₽',
  },
  {
    id: generateRandomString(),
    img: product2,
    title: 'Реагент для очистки новых систем',
    code: '3031800001',
    price: '6 970 ₽',
  },
  {
    id: generateRandomString(),
    img: product3,
    title: 'Реле давления электр. Vodotok ЭДД-12Р',
    code: 'L4029',
    price: '2 728 ₽',
  },
  {
    id: generateRandomString(),
    img: product4,
    title: 'Комплект фитингов Danfoss DN15 ',
    code: '003H6902',
    price: '1 983 ₽',
  },
  {
    id: generateRandomString(),
    img: product5,
    title: 'S21A Пластина AiSi 316 0,5 mm TK 1234',
    code: 'S21A пластина',
    price: '1 875 ₽',
  },
];

const GOODSMOBILE: IGoods[] = [
  {
    id: generateRandomString(),
    img: product1,
    title: 'Насос Pedrollo JCRm 1 B -N',
    code: '46JCN1B0A1',
    price: '14 161 ₽',
  },
  {
    id: generateRandomString(),
    img: product2,
    title: 'Реагент для очистки новых систем',
    code: '3031800001',
    price: '6 970 ₽',
  },
  {
    id: generateRandomString(),
    img: product3,
    title: 'Реле давления электр. Vodotok ЭДД-12Р',
    code: 'L4029',
    price: '2 728 ₽',
  },
];

export function Goods() {
  let productArr: IGoods[];
  const {ref, inView} = useInView({
    threshold: 0.35,
  })

  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
  });

  width < 760 ? productArr = GOODSMOBILE.slice() : productArr = GOODSDESKTOP.slice();

  return (
    <div className={styles.wrapper}>
      <div className={styles.goodsBlock}>
        <div className={styles.textBlock}>
          <div className={styles.title}>
            <img src={boxIcon} alt="" />
            <Text size={24} mobileSize={16} color={EColors.orange} weight='bold700'>3465 товаров</Text>
          </div>
          <Text As='div' size={14}>На нашем сайте, в наличии с актуальными ценами.</Text>
        </div>
        <div className={styles.goods}>
          {productArr.map(product => {
            return (
              <div ref={ref} key={product.id} className={`${styles.product} ${inView ? styles.active : styles.hidden}`}>
                <div className={styles.productImg}>
                  <img src={product.img} alt="" />
                </div>
                <div className={styles.productDescription}>
                  <div className={styles.title}><Text size={13}>{product.title}</Text></div>
                  <div className={styles.code}>
                    <Text size={12} color={EColors.gray9C}>Артикул: </Text>
                    <Text size={12}>{product.code}</Text>
                  </div>
                  <Text As='div' size={20} color={EColors.orange}>{product.price}</Text>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
