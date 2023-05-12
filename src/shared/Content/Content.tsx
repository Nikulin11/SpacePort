import React from 'react';
import styles from './content.css';
import { BreadСrumbs } from './BreadСrumbs';
import { useIsMounted } from '../../hooks/useIsMounted';
import { Offer } from './Offer';
import { StagesOfWork } from './StagesOfWork';
import { About } from './About';
import { Brands } from './Brands';
import { Goods } from './Goods';

export function Content() {
  const [isMounted] = useIsMounted();

  return (
    <main>
      {isMounted && <BreadСrumbs />}
      {isMounted && <Offer />}
      <StagesOfWork />
      {isMounted && <About />}
      {isMounted && <Brands />}
      {isMounted && <Goods />}
    </main>
  );
}
