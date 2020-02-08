import styled from 'styled-components';
import { Wrapper } from 'components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing.xs}px 0;
  display: flex;
  justify-content: space-between;
`;

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;
