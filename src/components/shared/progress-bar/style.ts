import styled from '@emotion/styled';

type OutlineType = {
  width: number;
};

export const Outline = styled.div<OutlineType>`
  background-color: rgb(233, 233, 233);
  width: ${({ width }) => width}px;
`;

type ProgressType = {
  width: number;
};

export const Progress = styled.div<ProgressType>`
  background-color: rgb(62, 122, 235);
  height: 24px;
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
