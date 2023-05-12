import React from 'react';
import styles from './button.css';
import classNames from 'classnames';
import { EColors, Text, Tsizes } from '../Text';

interface IButtonProps {
  menu?: boolean;
  textProps: {
    text: string,
    size: Tsizes,
    mobileSize?: Tsizes,
    color?: EColors
  }; 
  padding: string;
}

export function Button(props: IButtonProps) {
  const {menu = false, textProps, padding} = props;
  const classes = classNames(
    styles.button,
    styles[padding],
  );

  return (
    <button className={classes}>
      {menu ?
        <div className={styles.burger}>
          <span></span>
        </div>
        : 
        null     
      }
      <Text size={textProps.size} mobileSize={textProps.mobileSize} color={textProps.color}>{textProps.text}</Text>
    </button> 
  );
}
