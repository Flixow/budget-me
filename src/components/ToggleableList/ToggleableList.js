import React, { Fragment, useState } from 'react';

const Item = React.memo(({ item, isOpen, onTriggerClick }) => (
  <div>
    <item.Trigger onClick={() => onTriggerClick(item.id)} />
    {isOpen && item.children}
  </div>
));

const ToggleableList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Fragment>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onTriggerClick={setSelectedItem}
          isOpen={selectedItem === item.id}
        />
      ))}
    </Fragment>
  );
};

export default React.memo(ToggleableList);
