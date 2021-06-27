import * as React from 'react';

import { PrimaryNumericTitle } from 'theme/typography';
import { AppIcon } from 'types/icon-types';

import { Outline, StyledSubTitle, StyledIcon } from './style';

type AggregateCardType = {
    aggregate: number,
    title: string,
    background: string,
    icon: AppIcon,
    currencySymbol?: boolean
}

export const AggregateCard: React.FC<AggregateCardType> = ({
    aggregate, title, background, icon, currencySymbol = false,
}) => (
    <>
        <Outline background={background}>
            <StyledIcon name={icon} fill={background} />
            <div>
                <PrimaryNumericTitle>{currencySymbol ? `$ ${aggregate}` : aggregate}</PrimaryNumericTitle>
                <StyledSubTitle data-testid="AggregateCardTitle">{title}</StyledSubTitle>
            </div>
        </Outline>
    </>
);
