import React, {
  useState, useRef, useContext, useEffect, useMemo,
} from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faExclamationTriangle, faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const ToastContext = React.createContext();
const StyledToastRack = styled.div`
  z-index: 1;
  position: fixed;
  right: 0;
  ${({ theme }) => css`
    width: ${theme.toast.width};
  `}
  bottom: 0;
  padding: 1em;
`;

const StyledToastBanner = styled.div`
  margin-left: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  padding: .25em .5em;
  ${({ flavor, theme }) => css`
    border-radius: ${theme.borderRadius} 0 0 ${theme.borderRadius};
    & path {
      fill: ${theme.flavors.background};
    }
    background-color: ${theme.flavors[flavor]}
  `}
`;
const StyledToastContent = styled.div`
  padding: .5em 1em;
  flex: 1;
`;
const StyledToastCancel = styled.div`
  display: flex;
  ${({ theme }) => css`
    & path {
      fill: ${theme.flavors.toastBlue};
    }
  `}
  padding: .25em .5em;
  align-items: center;
`;
const StyledToast = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  ${({ theme, cancel }) => css`
    border: 1px solid ${theme.flavors.toastBlue};
    animation: ${theme.animations.styledtoast} .3s ease-out, ${theme.animations.cancelled} 4.5s ease-out .3s;
    ${cancel ? css`animation: ${theme.animations.immediatecancel} .35s ease-out;` : ''}
    background-color: ${theme.flavors.background};
    border-radius: ${theme.borderRadius};
  `}
  animation-fill-mode: forwards;  
  box-shadow: 0px 4px 3px 3px rgba(0,0,0, .1);
  & + & {
    margin-top: 1em;
  }
`;

export const ToastAlert = ({ children, flavor, id }) => {
  const { manuallyCancel, flavors } = useContext(ToastContext);
  const internalFlavors = useMemo(() => ({
    [flavors.success]: <FontAwesomeIcon icon={faCheckCircle} />,
    [flavors.error]: <FontAwesomeIcon icon={faExclamationTriangle} />,
  }), [flavors]);
  const [cancel, setCancel] = useState(false);
  useEffect(() => () => {
    setCancel(true);
  }, []);
  const handleClick = () => {
    setCancel(true);
    manuallyCancel(id);
  };
  return (
    <StyledToast
      ariaLive="polite"
      cancel={cancel}
      onClick={handleClick}
    >
      <StyledToastBanner flavor={flavor}>
        {internalFlavors[flavor]}
      </StyledToastBanner>
      <StyledToastContent>
        {children}
      </StyledToastContent>
      <StyledToastCancel>
        <FontAwesomeIcon icon={faTimes} />
      </StyledToastCancel>
    </StyledToast>
  );
};

ToastAlert.propTypes = {
  children: PropTypes.node.isRequired,
  flavor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export const ToastRack = ({ toasts }) => (
  <StyledToastRack>
    {
      toasts.map((toast) => (
        <ToastAlert key={toast.id} id={toast.id} flavor={toast.flavor}>
          {toast.message}
        </ToastAlert>
      ))
    }
  </StyledToastRack>
);
ToastRack.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      flavor: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export const ToastManager = ({ children, defaultTime }) => {
  const toasts = useRef([]);
  const [availableToastId, setAvailableToastId] = useState(0);
  const [forceRerender, setForceRerender] = useState(0);

  const internalToast = (message, flavor, time) => {
    const usedId = availableToastId;
    toasts.current = [...toasts.current, {
      message, flavor, time, id: usedId,
    }];

    setAvailableToastId(availableToastId + 1);
    setTimeout(() => {
      toasts.current.splice(0, 1);
      setForceRerender(toasts.current.length);
    }, time ?? defaultTime);
  };
  const internalManualCancel = (id) => {
    setTimeout(
      () => {
        toasts.current = toasts.current.filter((toast) => toast.id !== id);
        setForceRerender(toasts.current.length);
      },
      300,
    );
  };

  const contextData = {
    flavors: {
      success: 'success',
      error: 'error',
    },
    toast: internalToast,
    manuallyCancel: internalManualCancel,
  };
  return (
    <ToastContext.Provider value={contextData}>
      {children}
      <ToastRack toasts={toasts.current} />
    </ToastContext.Provider>
  );
};

ToastManager.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTime: PropTypes.number,
};
ToastManager.defaultProps = {
  defaultTime: 5000,
};

export default ToastManager;
