import styled from '@emotion/styled';

import { darkGrey } from '../../../theme/color';
import { progressBarHeight, progressBarSizeType } from './constant';

type LabelWrapperType = {
  width: string;
};

export const LabelWrapper = styled.div<LabelWrapperType>`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width};
  align-items: center;
`;

type NewProgressBarType = {
  width: string;
  percent: number;
  type: progressBarSizeType;
};

export const NewProgressBar = styled.div<NewProgressBarType>`
  background-color: rgb(233, 233, 233);
  width: ${props => props.width};
  position: relative;
  height: ${props => progressBarHeight[props.type]}px;
  &: after {
    content: '';
    height: ${props => progressBarHeight[props.type]}px;
    position: absolute;
    left: 0;
    width: ${props => props.percent}%;
    background-color: ${darkGrey};
  }
`;
