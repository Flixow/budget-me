import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from 'components';

import { Container, List } from './Navigation.css';

const Navigation = ({ items }) => {
  return (
    <Container>
      <Wrapper>
        <List>
          {items.map(item => (
            <li key={item.to}>
              <Link to={item.to}>{item.content}</Link>
            </li>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

Navigation.defaultProps = {
  items: [],
};

export default Navigation;
