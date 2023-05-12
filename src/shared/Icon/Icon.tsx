import React from 'react';
import { СomparisonIcon } from './СomparisonIcon';
import { AppealsIcon } from './AppealsIcon';
import { BasketIcon } from './BasketIcon';
import { ProfileIcon } from './ProfileIcon';
import { FavoritesIcon } from './FavoritesIcon';
import { FlagOfRussiaIcon } from './FlagOfRussiaIcon';
import { FlagOfTurkeyIcon } from './FlagOfTurkeyIcon';
import { FlagOfUSAIcon } from './FlagOfUSAIcon';
import { StageOneIcon } from './StageOneIcon';
import { StageTwoIcon } from './StageTwoIcon';
import { StageThreeIcon } from './StageThreeIcon';
import { HomeIcon } from './HomeIcon';
import { CatalogIcon } from './CatalogIcon';
import { FavoritesIcon2 } from './FavoritesIcon2';

export enum EIconsName {
    СomparisonIcon = 'СomparisonIcon',
    AppealsIcon = 'AppealsIcon',
    BasketIcon = 'BasketIcon',
    ProfileIcon = 'ProfileIcon',
    shareIcon = 'ShareIcon',
    FavoritesIcon = 'FavoritesIcon',
    FlagOfRussiaIcon = 'FlagOfRussiaIcon',
    FlagOfTurkeyIcon = 'FlagOfTurkeyIcon',
    FlagOfUSAIcon = 'FlagOfUSAIcon',
    StageOneIcon = 'StageOneIcon',
    StageTwoIcon = 'StageTwoIcon',
    StageThreeIcon = 'StageThreeIcon',
    HomeIcon = 'HomeIcon',
    CatalogIcon = 'CatalogIcon',
    FavoritesIcon2 ='FavoritesIcon2',
}

export type TIconSize = 16 | 22 | 24 | 57;

interface IIconProps {
    name: EIconsName;
    size: TIconSize;
}

export function Icon({name, size}: IIconProps) {
    if (name === EIconsName.СomparisonIcon) {
        return (
            <СomparisonIcon size={size}/>
        )
    } else if (name === EIconsName.AppealsIcon) {
        return (
            <AppealsIcon size={size}/>
        )
    } else if (name === EIconsName.BasketIcon) {
        return (
            <BasketIcon size={size}/>
        )
    } else if (name === EIconsName.ProfileIcon) {
        return (
            <ProfileIcon size={size}/>
        )
    } else if (name === EIconsName.FavoritesIcon) {
        return (
            <FavoritesIcon size={size}/>
        )
    } else if (name === EIconsName.FlagOfRussiaIcon) {
        return (
            <FlagOfRussiaIcon size={size}/>
        )
    } else if (name === EIconsName.FlagOfTurkeyIcon) {
        return (
            <FlagOfTurkeyIcon size={size}/>
        )
    } else if (name === EIconsName.FlagOfUSAIcon) {
        return (
            <FlagOfUSAIcon size={size}/>
        )
    } else if (name === EIconsName.StageOneIcon) {
        return (
            <StageOneIcon size={size}/>
        )
    } else if (name === EIconsName.StageTwoIcon) {
        return (
            <StageTwoIcon size={size}/>
        )
    } else if (name === EIconsName.StageThreeIcon) {
        return (
            <StageThreeIcon size={size}/>
        )
    } else if (name === EIconsName.HomeIcon) {
        return (
            <HomeIcon size={size}/>
        )
    } else if (name === EIconsName.CatalogIcon) {
        return (
            <CatalogIcon size={size}/>
        )
    } else if (name === EIconsName.FavoritesIcon2) {
        return (
            <FavoritesIcon2 size={size}/>
        )
    } else return null
  }

