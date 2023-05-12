import React from 'react';
import styles from './icon.css'

interface IFlagOfUSAIconProps {
  size: number;
}

export function FlagOfUSAIcon({size}: IFlagOfUSAIconProps) {
  return (
  <svg className={styles[size]} width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect x="0.1" y="0.1" width="23.8" height="15.8" fill="url(#pattern0)" stroke="#3A3A3A" strokeWidth="0.2"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_2_196" transform="matrix(0.00505051 0 0 0.00757576 -0.131313 0)"/>
    </pattern>
    <image id="image0_2_196" width="250" height="132" xlinkHref="data:image/png;base64,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"/>
    </defs>
  </svg>
  );
}