import React from 'react';
import styles from './icon.css'

interface IFlagOfTurkeyIconProps {
  size: number;
}

export function FlagOfTurkeyIcon({size}: IFlagOfTurkeyIconProps) {
  return (
  <svg className={styles[size]} width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect x="0.1" y="0.1" width="23.8" height="15.8" fill="url(#pattern0)" stroke="black" strokeWidth="0.2"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_2_199" transform="scale(0.0037037 0.00555556)"/>
    </pattern>
    <image id="image0_2_199" width="270" height="180" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC0CAMAAABSSTIwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACjlBMVEXLICfNKC/VSU/cam/kjJDsr7Hyxsj219j55+j88PH99vf////kjI/NJy7LISjURkvhf4PuuLr44+T//f3ut7rhfoLURUvQNDrgeX3ts7X66+ztsrTgeH3PMzrMJi3bY2jutbf++/v+/PzxxMXecnfNKS/WUFbqp6n88fHqpqnWTlTXVFrvvb/zy83ZW2H0ztD11NXXVFn10tTXUlfPMDbpn6L//v7srrDPMjn77u7igYXLIinRO0HzzM7zy8zROkD77/D88vLcaW7MIyrlkJPMJSzROUD00NH77u/zzc/vu73tsbTnmZznl5rnmp3vvL7ROD/TREr55ub44OHfdnrPMTfPMTjfd3v66OnUR03WT1Xec3frqKvWUlf99fXOLDPRNz7db3P++/z9+PjpoqXSPUPaYmfonqHROD799fb11tfXU1j55+f++vrihYjLHyfMJCv55OXWUVbonaDvubvOLzXge3/++fnda3Dgen7aYWbfdHjrqq3ihIj22NndbHHjiIz11dbqo6bcZ2zwwML109XZW2DsrK/33N3QNjzOKzLgfIDQNTvNKjH00tPaX2TdbXLzysvNKjDkio3xw8Xwvb/caGzqpajSP0XecHT22tvxwcPOLTTecHXhgIT33d744eL22dvwvsDQNz3bZmv00dLURkzZXGHyxcfki47YVlzVS1HljpLkjZHlj5Pyx8nVSlDmlZnxxMb99/fdbnL329z77Oz44uPhfYHUSE7utrnsr7LVTFH66uv33t/fdXnSPkT66erttLbcaW3aYGXwv8H88/PYWV733+Domp7jhYnKICf55ebjh4vTQEbrq67qpKf89PT77e3SPELfd3zXVVvTQkj0z9DyycrVTVKvjDxWAAAAAWJLR0QLH9fEwAAAAAd0SU1FB+YGFhcGFKMSadIAAAb5SURBVHja7Z37X1RFFMAvLoLLKKhgvHdlJXGRhyDLqqioiygaKiqURpCSEL4C3xkKKEqmlpYmqSmlmFJm+cCyh6VlWfYw7fXfpIDAAsKZ3dPc2dnz/ZEf5ly+n9m5M2fOzNU0giAIgiAI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"/>
    </defs>
  </svg>
  );
}
