import React from 'react';
import styled from 'styled-components';

export const IconographicLabel = styled.span`
  & + svg {
    margin-left: .25em;
  }
  & + img {
    margin-left: .25em;
  }
  svg + & {
    margin-left: .25em;
  }
`;

export default IconographicLabel;
