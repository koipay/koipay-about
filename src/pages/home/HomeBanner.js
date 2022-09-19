import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import Button from '../../components/button/Button';
import { Container, FlexCenter } from '../../styles';

const HomeBanner = () => {
  return (
    <StyledSection>
      <Container>
        <div className="inner">
          <div className="left">
            <div className="title">Make Paying Easier with KoiPay</div>
            <Button className={'btn'}>Sign up Now</Button>
          </div>
          <div className="img-svg">
            <img src={images.banner} alt="" />
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};
const StyledSection = styled.section`
  height: 55.2rem;
  padding-top: 16rem;
 

  .img-svg {
    position: absolute;
    right: 0;
  }
  .inner {
    ${FlexCenter('between')};
    position: relative;
  }
  .title {
    font-size: var(--fz70);
    max-width: 50rem;
    font-weight: 600;
    line-height: 9.3rem;
  }
  .btn {
    width: 23rem;
    margin-top: 9rem;
  }
`;

export default HomeBanner;
