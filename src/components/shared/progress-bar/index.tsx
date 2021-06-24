import * as React from 'react';
import { useEffect } from 'react';

import { Label } from '../../../theme/typography';
import { LabelWrapper, Outline, Progress } from './style';

type ProgressBarTypes = {
    width: number;
    percent: number;
}

export const ProgressBar: React.FC<ProgressBarTypes> = ({ width, percent }) => {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        setValue(percent * width);
    }, [percent, width]);

    return (
        <>
            <LabelWrapper width={width}>
                <Label>Sell through</Label>
                <span>
                    {percent * 100}
                    %
                </span>
            </LabelWrapper>
            <Outline width={width}>
                <Progress width={value} />
            </Outline>
        </>

    );
};
