import { css } from 'styled-components';

const Border = (color) => {
  return css`
    border: 1px solid ${color || `transparent`};
  `;
};

export default Border;
