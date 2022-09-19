import React from 'react';
import styled, { css } from 'styled-components';
import { Container, FlexCenter } from '../../styles';

const LayoutHome = ({ title, note, img, key, flex }) => {
  return (
    <StyledLayout key={key} flex={flex}>
      <Container>
        <div className="inner">
          <div className="left">
            <div className="title">{title}</div>
            <div className="note">{note}</div>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
      </Container>
    </StyledLayout>
  );
};
const StyledLayout = styled.div`
    margin-bottom: 18rem;
    &:last-child{
        margin-bottom: 0;
    }
  .inner {
    ${FlexCenter('between')}
    ${({ flex }) =>
      flex &&
      css`
        flex-direction: row-reverse;
      `};
  }
  .title {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 4.5rem;
    margin-bottom: 2.4rem;
  }
  .note {
    max-width: 60rem;
    font-size: var(--fz20);
    line-height: 3.2rem;
  }
`;

export default LayoutHome;
