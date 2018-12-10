import { createGlobalStyle } from 'styled-components';

export const UtilitiesStyles = createGlobalStyle`
  .u-separator {
    color: ${props => props.theme.textColor};
    padding: 0 4px;
    font-size: 0.85em;
  }

  .u-visible {
    display: block;
  }

  .u-hidden {
    display: none;
  }

  .u-margin-top-none {
    margin-top: 0;
  }

  .u-padding-bottom-medium {
    padding-bottom: 1rem;
  }

  .u-text-transform-capitalize {
    text-transform: capitalize;
  }

  .u-visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    top: 0;
    left: 0;
  }
`;
