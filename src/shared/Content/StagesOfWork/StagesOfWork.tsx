import React from 'react';
import styles from './stagesofwork.css';
import { Text } from '../../Text';
import { EIconsName, Icon } from '../../Icon/Icon';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';

interface ISTAGES {
  id: string,
  img: EIconsName;
  title: string;
  text: string;
  horizontalLine: boolean; 
}

const STAGES: ISTAGES[] = [
  {
    id: generateRandomString(),
    img: EIconsName.StageOneIcon,
    title: 'Свяжитесь с нами',
    text: 'Оставьте заявку в форме обратной связи. В кротчайшее сроки наши специалисты свяжутся с вами.',
    horizontalLine: true
  },
  {
    id: generateRandomString(),
    img: EIconsName.StageTwoIcon,
    title: 'Предоставьте остатки',
    text: 'Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя.',
    horizontalLine: true
  },
  {
    id: generateRandomString(),
    img: EIconsName.StageThreeIcon,
    title: 'Обновляйте остатки',
    text: 'Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!',
    horizontalLine: false
  },
]

export function StagesOfWork() {
  return (
    <section className={styles.stagesSection}>
      <div className={styles.wrapper}>
        <Text As='h2' size={26} mobileSize={20} >Этапы работы</Text>
        <div className={styles.stages}>
          {STAGES.map(el => {
            return (
              <div key={el.id} className={styles.stage}>
                {el.horizontalLine ? <span className={styles.horizontalLine}></span> : null}
                <Icon name={el.img} size={57} />
                <div className={styles.title}>
                  <Text As='p' size={16} weight='bold600'>{el.title}</Text>
                </div>
                <Text As='p' size={14}>{el.text}</Text>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
