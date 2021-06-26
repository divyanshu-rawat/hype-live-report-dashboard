import styled from '@emotion/styled';

import { darkGrey } from '../../../theme/color';
import { progressBarHeight, progressBarSizeType } from './constant';

type OutlineType = {
  width: number;
};

export const Outline = styled.div<OutlineType>`
  background-color: rgb(233, 233, 233);
  width: ${({ width }) => width}px;
`;

export type ProgressType = {
  width: number;
  type: progressBarSizeType;
};

export const Progress = styled.div<ProgressType>`
  background-color: ${darkGrey};
  height: ${({ type }) => progressBarHeight[type]}px;
  width: ${({ width }) => width}px;
  transition: 1s ease;
  transition-delay: 0.5s;
`;

type LabelWrapperType = OutlineType;

export const LabelWrapper = styled.div<LabelWrapperType>`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width}px;
  align-items: center;
`;
