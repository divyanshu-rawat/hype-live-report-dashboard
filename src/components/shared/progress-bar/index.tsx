import * as React from 'react';
import { useEffect } from 'react';

import { SubTitle } from '../../../theme/typography';
import { progressBarSizeType } from './constant';
import { LabelWrapper, Outline, Progress } from './style';

type ProgressBarTypes = {
    width: number;
    percent: number;
    type: progressBarSizeType;
}

export const ProgressBar: React.FC<ProgressBarTypes> = ({ width, percent, type }) => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        setValue(percent * width);
    }, [percent, width]);

    return (
        <>
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
        </>

    );
};
