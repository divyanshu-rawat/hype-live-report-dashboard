import React from 'react';

import { green, brown, blue } from '../../../theme/color';
import { SecondaryTitle, SubTitle } from '../../../theme/typography';
import { AppIcon } from '../../../types/icon-types';
import {
    Outline, StyledIcon, StyledProgressBar, TagRow, TagWrapper,
} from './style';

type TagType = {
    name: AppIcon;
    count: number;
    fill: string;
}

const Tag: React.FC<TagType> = ({ name, count, fill }) => (
    <TagWrapper>
        <StyledIcon name={name} fill={fill} />
        <SubTitle>{count}</SubTitle>
    </TagWrapper>
);

export const EventCard: React.FC = () => (
    <>
        <Outline>
            <SecondaryTitle>350V2 BLACK KIDS</SecondaryTitle>
            <StyledProgressBar width={220} percent={0.8} type="sm" />
            <TagRow>
                <Tag name={AppIcon.UnitSold} fill={green} count={12.400} />
                <Tag name={AppIcon.PeopleGroup} fill={brown} count={11.400} />
                <Tag name={AppIcon.Dollar} fill={blue} count={12.400} />
            </TagRow>
        </Outline>
    </>
);
