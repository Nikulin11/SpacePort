import React from 'react';
import styles from './threadtitle.css';
import { Text } from '../../Text';

export function ThreadTitle() {
  return (
    <a className={styles.company} href="#">
      <Text size={24}>Stoking</Text>
    </a>
  );
}
