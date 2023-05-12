import React from 'react';
import styles from './icon.css'

interface IHomeIconProps {
  size: number;
}

export function HomeIcon({size}: IHomeIconProps) {
    return (
    <svg className={styles[size]} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3978 1.89482L1.5527 8.50535C1.0475 8.88292 0.75 9.47667 0.75 10.1074V21C0.75 22.1046 1.64543 23 2.75 23H5.98005C7.08462 23 7.98005 22.1046 7.98005 21V14.5789C7.98005 13.4744 8.87548 12.5789 9.98005 12.5789H13.2101C14.3147 12.5789 15.2101 13.4744 15.2101 14.5789V21C15.2101 22.1046 16.1055 23 17.2101 23H20.4401C21.5447 23 22.4401 22.1046 22.4401 21V10.1074C22.4401 9.47667 22.1426 8.88292 21.6374 8.50535L12.7924 1.89482C12.0824 1.36419 11.1078 1.36419 10.3978 1.89482Z" stroke="#3A3A3A"/>
    </svg>
    );
}
