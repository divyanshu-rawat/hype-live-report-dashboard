import React from 'react';

import { green, brown, blue } from 'theme/color';
import { SecondaryTitle, SubTitle } from 'theme/typography';
import { eventType } from 'types/global';
import { AppIcon } from 'types/icon-types';
import { unitSold } from 'utils';

import {
    Outline, StyledIcon, StyledProgressBar, TagRow, TagWrapper,
} from './style';

type TagType = {
    name: AppIcon;
    count: number;
    fill: string;
    currencySymbol?: boolean;
}

const Tag: React.FC<TagType> = ({
    name, count, fill, currencySymbol = false,
}) => (
    <TagWrapper>
        <StyledIcon name={name} fill={fill} />
        <SubTitle>{currencySymbol ? `$ ${count}` : count}</SubTitle>
    </TagWrapper>
);

export const EventCard: React.FC<eventType> = ({
    sellThrough, revenue, participants, displayName, stock,
}) => (
    <>
        <Outline>
            <SecondaryTitle data-testid="EventCardTitle">{displayName}</SecondaryTitle>
            <StyledProgressBar percent={sellThrough / 100} type="sm" />
            <TagRow>
                <Tag name={AppIcon.UnitSold} fill={green} count={unitSold(sellThrough, stock)} />
                <Tag name={AppIcon.PeopleGroup} fill={brown} count={participants} />
                <Tag name={AppIcon.Dollar} fill={blue} count={revenue} currencySymbol />
            </TagRow>
        </Outline>
    </>
);
