import React from 'react';
import styles from './icon.css'

interface ICatalogIconProps {
  size: number;
}

export function CatalogIcon({size}: ICatalogIconProps) {
    return (
      <svg className={styles[size]} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_1837)">
        <path d="M23.5 4.5H0.500016C0.224016 4.5 0 4.76881 0 5.1C0 5.43119 0.224016 5.7 0.500016 5.7H23.5C23.776 5.7 24 5.43119 24 5.1C24 4.76881 23.776 4.5 23.5 4.5Z" fill="#3A3A3A"/>
        <path d="M11.75 11.5H0.250007C0.112008 11.5 0 11.7688 0 12.1C0 12.4312 0.112008 12.7 0.250007 12.7H11.75C11.888 12.7 12 12.4312 12 12.1C12 11.7688 11.888 11.5 11.75 11.5Z" fill="#3A3A3A"/>
        <path d="M12.925 18.5H0.275008C0.123208 18.5 0 18.7688 0 19.1C0 19.4312 0.123208 19.7 0.275008 19.7H12.925C13.0768 19.7 13.2 19.4312 13.2 19.1C13.2 18.7688 13.0768 18.5 12.925 18.5Z" fill="#3A3A3A"/>
        <path d="M18.9 14.3789L22.1409 18.9596M20.2706 12.2441C19.9531 14.0443 18.222 15.2437 16.404 14.9231C14.586 14.6025 13.3696 12.8832 13.6871 11.0831C14.0046 9.28292 15.7357 8.08352 17.5537 8.40414C19.3716 8.72476 20.588 10.444 20.2706 12.2441Z" stroke="#3A3A3A" strokeLinecap="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2_1837">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    );
}
