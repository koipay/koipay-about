import React from 'react';
import styled from 'styled-components';
import { Container, FlexCenter } from '../../styles';
import images from '../../assets/images';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="inner">
          <div className="footer-logo">
           <a href="/"> <img src={images.logo} alt="Koipay" /></a>
          </div>
          <div className="list-item">
            <div className="box-text">
              <span>About us</span>
              <span>Legal</span>
              <span>Guide</span>
            </div>
            <div className="box-text">
              <span>Products</span>
              <span>Online Payment</span>
              <span>In-store Payment</span>
            </div>
            <div className="box-text">
              <span>Developers</span>
              <span>API Reference</span>
            </div>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  background: #262626;
  height: 30rem;
  .footer-logo {
    margin-bottom: 2.4rem;
    cursor: pointer;
  }
  .list-item {
    ${FlexCenter('between')}
  }
  .box-text {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    span {
      font-size: var(--fz20);
      line-height: 3rem;
      cursor: pointer;
    }
  }
`;

export default Footer;
