import { css } from 'styled-components';

const FlexCenter = (
  fa,
  gaps,
) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    ${gaps &&
    css`
      gap: ${gaps}rem;
    `}

    ${fa === 'between' &&
    css`
      justify-content: space-between;
    `};
  `;
};

export default FlexCenter;
