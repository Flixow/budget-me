import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${styledNormalize}
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li + li {
      margin-left: ${({ theme }) => theme.spacing.xs}px;
    }
  }
`;
