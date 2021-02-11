import { React } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faExclamationTriangle, faTimes,
} from '@fortawesome/free-solid-svg-icons';

const bindCSS = (flavor) => {
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

const StyledToast = styled.div`
  @keyframes styledtoast {
    0% {
      transform: translateY(100px)
    }
    100% {
      transform: translateY(0px)
    }
  }
  display: flex;
  border: 1px solid #54457F;
  width: 250px;
  border-radius: .25em;
  /* transition: transform .3s ease-in; */
  animation: styledtoast .3s 1;
  background-color: white;
  box-shadow: 0px 4px 3px 3px rgba(0,0,0, .1);
  & + & {
    margin-top: 1em;
  }
  & div.toast__alert {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    & path {
      fill: white;
    }
    padding: .25em .5em;
    ${(props) => bindCSS(props.flavor)}
  }
  & div.toast__content {
    padding: .5em 1em;
    flex: 1;
  }
  & div.toast__cancel {
    display: flex;
    & path {
      fill: #54457F;
    }
    align-items: center;
  }
`;

export const ToastAlert = (props) => {
  const { children, flavor } = props;
  const flavors = {
    success: <FontAwesomeIcon icon={faCheckCircle} />,
    error: <FontAwesomeIcon icon={faExclamationTriangle} />,
  };
  const alertIcon = flavors[flavor];
  return (
    <StyledToast flavor={flavor} ariaLive="polite">
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
};
export default ToastAlert;
