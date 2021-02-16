import { css } from 'styled-components';

export const theme = {
  button: {
    boxShadowSizes: '0px 0px 2px 2px',
    transitionTiming: '.2s',
    defaultStyling: css`
      height: 40px;
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      text-align: center;
      font-weight: bold;
      padding: .25em 1em;
      position: relative;
      border-radius: .25em;
      border-width: 2px;
      border-style: solid;
      & + & {
        margin-top: .5em;
      }
      & + button {
        margin-top: .5em;
      }
      & svg {
        margin-left: .25em;
      }
    `,
  },
  toast: {
    width: '250px',
  },
  text: {
    contentText: css`
      font-size: 1em;
    `,
    titleText: css`
      font-size: 24px;
      font-weight: bold;
    `,
    emphasizedText: css`
      font-size: 18px;
      font-weight: bold;
    `,
  },
};
export default theme;
