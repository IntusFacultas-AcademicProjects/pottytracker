import { useState, useRef } from 'react';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faExclamationTriangle, faTimes,
} from '@fortawesome/free-solid-svg-icons';

const getCSSForFlavor = (flavor) => {
  const flavors = {
    success: `
      background-color: #386C0B;
    `,
    error: `
      background-color: #EF6F6C;
    `,
  };
  return flavors[flavor];
};

export const ToastContext = React.createContext();
const ToastRack = styled.div`
  z-index: 1;
  position: fixed;
  right: 0;
  width: 250px;
  bottom: 0;
  padding: 1em;
`;

const StyledToast = styled.div`
  @keyframes styledtoast {
    0% {
      transform: translateY(20px)
    }
    100% {
      transform: translateY(0px)
    }
  }
  @keyframes cancelled {
  0% {
    transform: translateX(0px);
  }
  90% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(300px);
  }
}
  @keyframes immediatecancel {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(300px);
  }
}

  display: flex;
  border: 1px solid #54457F;
  width: 250px;
  cursor: pointer;
  animation: styledtoast .3s ease-out, cancelled 4.5s ease-out .3s;
  animation-fill-mode: forwards;  
  border-radius: .25em;
  background-color: white;
  box-shadow: 0px 4px 3px 3px rgba(0,0,0, .1);
  & + & {
    margin-top: 1em;
  }

  & .toast__alert {
    margin-left: -1px;
    border-radius: .25em 0 0 .25em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    & path {
      fill: white;
    }
    padding: .25em .5em;
    ${(props) => getCSSForFlavor(props.flavor)}
  }
  & .toast__content {
    padding: .5em 1em;
    flex: 1;
  }
  &.toast--cancelled {
    animation: immediatecancel .35s ease-out;
  }
  & .toast__cancel {
    display: flex;
    padding: .25em .5em;
    & path {
      fill: #54457F;
    }
    align-items: center;
  }
`;

export const ToastAlert = ({ children, flavor, id }) => {
  const { manuallyCancel, flavors } = React.useContext(ToastContext);
  const internalFlavors = {
    [flavors.success]: <FontAwesomeIcon icon={faCheckCircle} />,
    [flavor.error]: <FontAwesomeIcon icon={faExclamationTriangle} />,
  };
  const alertIcon = internalFlavors[flavor];
  const [cancel, setCancel] = useState(false);
  const handleClick = () => {
    setCancel(true);
    manuallyCancel(id);
  };
  return (
    <StyledToast
      flavor={flavor}
      ariaLive="polite"
      className={cancel ? 'toast--cancelled' : ''}
      onClick={handleClick}
    >
      <div className="toast__alert">
        {alertIcon}
      </div>
      <div className="toast__content">
        {children}
      </div>
      <div className="toast__cancel">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </StyledToast>
  );
};

ToastAlert.propTypes = {
  children: PropTypes.node.isRequired,
  flavor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export const ToastManager = ({ children, defaultTime }) => {
  const toasts = useRef([]);
  const [availableToastId, setAvailableToastId] = useState(0);
  const [forceRerender, setForceRerender] = useState(0);

  const contextData = {
    flavors: {
      success: 'success',
      error: 'error',
    },
    toast(message, flavor, time) {
      const usedId = availableToastId;
      toasts.current = [...toasts.current, {
        message, flavor, time, id: usedId,
      }];

      setAvailableToastId(availableToastId + 1);
      setTimeout(() => {
        toasts.current.splice(0, 1); // toasts.filter((toast) => toast.id !== usedId);
        setForceRerender(toasts.current.length);
      }, time ?? defaultTime);
    },
    manuallyCancel(id) {
      setTimeout(
        () => {
          toasts.current = toasts.current.filter((toast) => toast.id !== id);
          setForceRerender(toasts.current.length);
        },
        300,
      );
    },
  };
  return (
    <ToastContext.Provider value={contextData}>
      {children}
      <ToastRack>
        {
          toasts.current.map((toast) => (
            <ToastAlert key={toast.id} id={toast.id} flavor={toast.flavor}>
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
  defaultTime: PropTypes.number,
};
ToastManager.defaultProps = {
  defaultTime: 5000,
};

export default ToastManager;
