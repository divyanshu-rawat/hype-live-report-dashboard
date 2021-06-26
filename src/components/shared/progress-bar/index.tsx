import React, { useState, useEffect } from 'react';

import { SubTitle } from '../../../theme/typography';
import { progressBarSizeType } from './constant';
import { LabelWrapper, Outline, Progress } from './style';

type ProgressBarTypes = {
    width: number;
    percent: number;
    type: progressBarSizeType;
}

export const ProgressBar: React.FC<ProgressBarTypes> = ({
    width, percent, type, ...rest
}) => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        setValue(percent * width);
    }, [percent, width]);

    return (
        <div {...rest}>
            <LabelWrapper width={width}>
                <SubTitle>Sell through</SubTitle>
                <span>
                    {percent * 100}
                    %
                </span>
            </LabelWrapper>
            <Outline width={width}>
                <Progress width={value} type={type} />
            </Outline>
        </div>

    );
};
