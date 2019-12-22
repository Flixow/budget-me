import styled from 'styled-components';

export const List = styled.ul`
  ul + ul {
    margin-top: ${({ theme }) => theme.spacing.xs}px;
  }
`;

export const ListItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  padding: ${({ theme }) => theme.spacing.xs}px;
  display: flex;
  justify-content: space-between;

  > *:nth-child(1) {
    flex: 4;
  }
  > *:nth-child(2) {
    flex: 2;
  }
  > *:nth-child(3) {
    flex: 3;
  }
  > *:nth-child(4) {
    flex: 1;
  }
`;
