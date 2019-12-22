import React, { Fragment, useState } from 'react';

const ToggleableList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Fragment>
      {items.map((item, i) => (
        <div key={item.id}>
          <item.Trigger onClick={() => setSelectedItem(i)} />
          {selectedItem === i && item.children}
        </div>
      ))}
    </Fragment>
  );
};

export default ToggleableList;
