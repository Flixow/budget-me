import React from 'react';

import { Wrapper } from './BudgetCategoryList.css';

const BudgetCategoryList = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <div>
          {i} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam officiis mollitia deleniti nesciunt quo neque? Tempore odio nostrum voluptate, quo, veniam magnam pariatur enim quos, atque commodi id alias?
        </div>
      ))}
    </Wrapper>
  );
};

export default BudgetCategoryList;
