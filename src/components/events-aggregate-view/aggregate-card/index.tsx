import * as React from 'react';

import { PrimaryNumericTitle } from '../../../theme/typography';
import { UnitSoldIcon, Outline, StyledSubTitle } from './style';

type AggregateCardType = {
    aggregate: number,
    title: string
}

export const AggregateCard: React.FC<AggregateCardType> = ({ aggregate, title }) => (
    <>
        <Outline>
            <UnitSoldIcon />
            <div>
                <PrimaryNumericTitle>{aggregate}</PrimaryNumericTitle>
                <StyledSubTitle>{title}</StyledSubTitle>
            </div>
        </Outline>
    </>
);
