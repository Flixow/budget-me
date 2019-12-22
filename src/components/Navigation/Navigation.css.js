import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(238, 238, 238);
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;
