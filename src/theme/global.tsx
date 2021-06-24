import React from 'react';

import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      * { box-sizing: border-box; }
      body {
        font-family: Helvetica;
      }
    `}
  />
);
