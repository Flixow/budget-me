import React, { Fragment, useState, useEffect } from 'react';

const Item = React.memo(({ item, isOpen, onTriggerClick }) => (
  <div>
    <item.Trigger onClick={() => onTriggerClick(item.id)} />
    {isOpen && item.children}
  </div>
));

const ToggleableList = ({ items, clickRef }) => {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    clickRef.current = setSelectedItem;
  }, [selectedItem, clickRef]);

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
