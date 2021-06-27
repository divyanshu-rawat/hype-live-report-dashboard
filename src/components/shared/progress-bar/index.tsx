import React from 'react';

import { SubTitle } from 'theme/typography';

import { progressBarSizeType } from './constant';
import { LabelWrapper, NewProgressBar } from './style';

type ProgressBarTypes = {
    percent: number;
    type: progressBarSizeType;
}

export const ProgressBar: React.FC<ProgressBarTypes> = ({ percent, type, ...rest }) => (
    <div {...rest}>
        <LabelWrapper width="100%">
            <SubTitle>Sell through</SubTitle>
            <span data-testid="ProgressBarPercentage">
                {percent * 100}
                %
            </span>
        </LabelWrapper>
        <NewProgressBar type={type} width="100%" percent={percent * 100} />
    </div>
);
