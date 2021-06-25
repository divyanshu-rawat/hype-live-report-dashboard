import React from 'react';

import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      h1,h2,h3,h4,h5,h6,p { margin:0 }
      * { box-sizing: border-box; }
      body {
        font-family: Helvetica;
      }
    `}
  />
);
