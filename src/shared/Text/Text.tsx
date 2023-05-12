import React from 'react';
import styles from './text.css';
import classNames from 'classnames';

export enum EColors {
  black = 'black',
  orange = 'orange',
  white = 'white',
  gray93 = 'gray93',
  gray90 = 'gray90',
  gray83 = 'gray83',
  gray9C = 'gray9C',
  grayDF = 'grayDF',
}

export type Tsizes = 26 | 24 | 20 | 16 | 14 | 13 | 12 | 11;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
  children?: React.ReactNode;
  size: Tsizes;
  mobileSize?: Tsizes;
  tabletSize?: Tsizes;
  desktopSize?: Tsizes;
  color?: EColors;
  weight?: string;
}

export function Text(props: ITextProps) {
  const { As = 'span', color = EColors.black, children, size, mobileSize, desktopSize, tabletSize, weight = null } = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    styles[`${weight}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
