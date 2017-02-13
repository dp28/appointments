import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { identity } from '../utils/functional';

export const Select = ({ id, options, selected, onSelect, display }) => {
  const safeDisplay = display || identity;
  return (
    <DropdownButton
      title={safeDisplay(selected)}
      id={"TimePicker--hours--" + id}
      noCaret={true}
      onSelect={onSelect}>
      {
        options.map(element => (
          <MenuItem eventKey={element} key={element} active={selected === element}>
            {safeDisplay(element)}
          </MenuItem>
        ))
      }
    </DropdownButton>
  );
};

export default Select;
