import { useState } from 'react';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { ToastAlert } from './ToastAlert';

const ToastRack = styled.div`
  z-index: 1;
  position: fixed;
  right: 0;
  width: 250px;
  bottom: 0;
  padding: 1em;
`;

export const ToastContext = React.createContext();
export const ToastManager = (props) => {
  const [toasts, setToasts] = useState([]);
  const contextData = {
    toast(message, flavor) { setToasts([...toasts, { message, flavor, time: new Date() }]); },
  };
  const { children } = props;
  return (
    <ToastContext.Provider value={contextData}>
      {children}
      <ToastRack>
        {
          toasts.map((toast) => (
            <ToastAlert key={toast.time.getTime()} flavor={toast.flavor}>
              {toast.message}
            </ToastAlert>
          ))
        }
      </ToastRack>
    </ToastContext.Provider>
  );
};

ToastManager.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastManager;
