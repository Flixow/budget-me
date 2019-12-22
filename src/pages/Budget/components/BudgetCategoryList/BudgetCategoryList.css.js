import styled from 'styled-components';

const Category = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  padding: ${({ theme }) => theme.spacing.xs}px;
  display: flex;
  justify-content: space-between;
`;

export const ParentCategory = styled(Category)`
  background-color: ${({ theme }) => theme.colors.gray.normal};
`;
export const CategoryAmount = styled.span`
  font-weight: 700;
  color: ${({ theme, negative }) => negative ? theme.colors.red.normal : theme.colors.green.normal}
`;

export const CategoryList = styled(Category)`
  background-color: ${({ theme }) => theme.colors.gray.light};
`;
