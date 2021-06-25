import styled from '@emotion/styled';

import { lightGrey } from '../../../theme/color';
import { ProgressBar } from '../../shared/progress-bar';
import { Icon } from '../../shared/svg-icons/icon';

export const Outline = styled.div`
  width: 280px;
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${lightGrey};
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProgressBar = styled(ProgressBar)`
  margin: 1rem 0;
`;

export const TagRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

type StyledIconType = {
  fill: string;
};

export const StyledIcon = styled(Icon)<StyledIconType>`
  width: 16px;
  height: 16px;
  margin: 0 4px;
  fill: ${({ fill }) => fill};
`;
