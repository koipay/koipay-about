import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { Container, FlexCenter } from '../../styles';

const HomeCoin = () => {
    console.log(images.coin);
  return (
    <StyledHomeCoin>
      <Container>
        <div className="inner">
          <div className="text-header">
            <div className="title">Amet minim mollit non</div>
            <div className="note">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </div>
          </div>
          <div className="img-coin">
            <img src={images.coin} alt="" />
          </div>
        </div>
      </Container>
    </StyledHomeCoin>
  );
};
const StyledHomeCoin = styled.section`
  .text-header {
    ${FlexCenter('between')}
    margin-bottom: 8rem;
  }
  .title {
    font-weight: 400;
    font-size: var(--fz48);
    line-height: 5.4rem;
  }
  .note {
    font-size: var(--fz20);
    line-height: 3rem;
  }
`;
export default HomeCoin;
