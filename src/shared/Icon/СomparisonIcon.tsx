import React from 'react';
import styles from './icon.css'

interface IСomparisonIconProps {
  size: number;
}

export function СomparisonIcon({size}: IСomparisonIconProps) {
    return (
        <svg className={styles[size]} width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 -0.000244141C9.27614 -0.000244141 9.5 0.223613 9.5 0.499756L9.5 21.5026C9.5 21.7788 9.27614 22.0026 9 22.0026C8.72386 22.0026 8.5 21.7788 8.5 21.5026L8.5 0.499756C8.5 0.223613 8.72386 -0.000244141 9 -0.000244141ZM0.5 12.6008C0.776143 12.6008 1 12.8247 1 13.1008L1 21.502C1 21.7781 0.776142 22.002 0.5 22.002C0.223858 22.002 0 21.7781 0 21.502V13.1008C0 12.8247 0.223858 12.6008 0.5 12.6008ZM18 8.06177C18 7.78562 17.7761 7.56177 17.5 7.56177C17.2239 7.56177 17 7.78562 17 8.06177V21.5036C17 21.7798 17.2239 22.0036 17.5 22.0036C17.7761 22.0036 18 21.7798 18 21.5036V8.06177Z" fill="#838383"/>
        </svg>
    );
}
