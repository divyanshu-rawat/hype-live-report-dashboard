import * as React from 'react';

import { PrimaryNumericTitle } from '../../../theme/typography';
import { UnitSoldIcon, Outline, StyledSubTitle } from './style';

type AggregateCardType = {
    aggregate: number
}

export const AggregateCard: React.FC<AggregateCardType> = ({ aggregate }) => (
    <>
        <Outline>
            <UnitSoldIcon />
            <div>
                <PrimaryNumericTitle>{aggregate}</PrimaryNumericTitle>
                <StyledSubTitle>Units Sold</StyledSubTitle>
            </div>
        </Outline>
    </>
);
