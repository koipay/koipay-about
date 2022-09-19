import styled from 'styled-components';

const Container = styled.div`
  max-width: var(--width-container);
  padding: 0 24px;
  margin: 0 auto;
  @media screen and (max-width: 47em) {
    padding: 0 15px;
  }
`;
export { Container };
