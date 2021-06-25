import * as React from 'react';

import { PrimaryNumericTitle } from '../../../theme/typography';
import { AppIcon } from '../../../types/icon-types';
import { Outline, StyledSubTitle, StyledIcon } from './style';

type AggregateCardType = {
    aggregate: number,
    title: string,
    background: string,
    icon: AppIcon
}

export const AggregateCard: React.FC<AggregateCardType> = ({
    aggregate, title, background, icon,
}) => (
    <>
        <Outline background={background}>
            <StyledIcon name={icon} fill={background} />
            <div>
                <PrimaryNumericTitle>{icon === 'Dollar' ? `$ ${aggregate}` : aggregate}</PrimaryNumericTitle>
                <StyledSubTitle>{title}</StyledSubTitle>
            </div>
        </Outline>
    </>
);
