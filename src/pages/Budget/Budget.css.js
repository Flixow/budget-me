import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;

  section:nth-child(1) {
    flex: 4;
  }
  section:nth-child(2) {
    flex: 8;
    padding: ${({ theme }) => theme.spacing.xs}px;
  }
`;
