import React from 'react';
import { useHistory } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { Wrapper, Content, CloseIcon } from './Modal.css';

const Modal = ({ children }) => {
  const history = useHistory();
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return createPortal(
    <Wrapper onClick={back}>
      <Content onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={back}>&times;</CloseIcon>
        {children}
      </Content>
    </Wrapper>,
    document.querySelector('#modal'),
  );
};

export default Modal;
