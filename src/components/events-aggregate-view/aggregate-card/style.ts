import styled from '@emotion/styled';

import { SubTitle } from '../../../theme/typography';
import { Icon } from '../../shared/svg-icons/icon';

type OutlineType = {
  background: string;
};

export const Outline = styled.div<OutlineType>`
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
  height: 128px;
  width: 342px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ background }) => background};
`;

type StyledIconType = {
  fill: string;
};

export const StyledIcon = styled(Icon)<StyledIconType>`
  height: 66px;
  width: 66px;
  fill: ${({ fill }) => fill};
  opacity: 0.5;
`;

export const StyledSubTitle = styled(SubTitle)`
  text-align: right;
`;
