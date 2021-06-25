import styled from '@emotion/styled';

import { SubTitle } from '../../../theme/typography';
import { UnitSold } from '../../shared/svg-icons/unit-sold';

export const Outline = styled.div`
  margin: 1rem 1rem 1rem 0;
  padding: 1rem;
  height: 128px;
  width: 342px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(12, 168, 77, 0.4);
`;

export const UnitSoldIcon = styled(UnitSold)`
  height: 66px;
  width: 66px;
`;

export const StyledSubTitle = styled(SubTitle)`
  text-align: right;
`;
