import React from 'react';
import styles from './genericlist.css';
import { EColors, Text, Tsizes } from '../Text';
import { EIconsName, Icon, TIconSize } from '../Icon/Icon';

interface IItem {
  id: string;
  textProps?: {
    As?: string,
    text: string,
    size: Tsizes, 
    mobileSize?: Tsizes;
    tabletSize?: Tsizes;
    desktopSize?: Tsizes;
    color?: EColors};
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  iconProps?: {
    iconName: EIconsName,
    iconSize: TIconSize,
  }
  divider?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
      <>
        {list.map(({ As = 'div', textProps, onClick, className, id, href, iconProps }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {iconProps ? 
              <>
                <Icon name={iconProps.iconName} size={iconProps.iconSize}/>
                {textProps ? 
                  <Text mobileSize={textProps.mobileSize} size={textProps.size} color={textProps.color || EColors.black}>
                    {textProps.text}
                  </Text> : null}
              </> 
              :
              <Text mobileSize={textProps ? textProps.mobileSize : 14} size={textProps ? textProps.size : 16} color={textProps ? textProps.color : EColors.black}>
                {textProps ? textProps.text : null}
              </Text>}
          </As>
        ))}
      </>
  );
}