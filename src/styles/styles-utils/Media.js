import { css } from 'styled-components';

export const media = {
  sm: (...args) => css`
    @media screen and (max-width: 47.9375em) {
      ${css(...args)}
    }
  `,

  md: (...args) => css`
    @media screen and (max-width: 64em) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media screen and (max-width: 80em) {
      ${css(...args)}
    }
  `,
};
