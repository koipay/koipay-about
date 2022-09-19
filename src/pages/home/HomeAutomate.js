import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import { Container, FlexCenter } from '../../styles';

const HomeAutomate = () => {
  return (
    <StyledAutomate>
      <Container>
        <div className="inner">
          <div className="automate-left">
            <div className="title">Automate anytime Connect anywhere</div>
            <div className="note">
              KOIPAY - at the forefront of digital payments and financial
              inclusion enables Internet users to make secure, fast and reliable
              transactions with the best payment experience.
            </div>
          </div>
          <div className="automate-right">
            <div className="connect">
              <div className="order">01.</div>
              <div className="box-text">
                <div className="note">Automate anytime</div>
                <div className="text-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.{' '}
                </div>
              </div>
              <div className="img">
                <img src={images.auto} alt="auto" />
              </div>
            </div>
            <div className="connect">
              <div className="order">02.</div>
              <div className="box-text">
                <div className="note">Connect anywhere</div>
                <div className="text-desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.{' '}
                </div>
              </div>
              <div className="img">
                <img src={images.connect} alt="auto" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyledAutomate>
  );
};
const StyledAutomate = styled.section`
   
  .automate-right,
  .automate-left {
    max-width: 50%;
  }
  .automate-right {
    padding-left: 3.8rem;
    flex-direction: column;
    display: flex;
    gap: 6rem;
  }
  .automate-left {
    padding-right: 3.8rem;
    border-right: 0.25px solid rgba(0, 0, 0, 0.2);
  }
  .inner {
    ${FlexCenter('between')}
  }
  .connect {
    align-items: flex-start;
    display: flex;
    gap: 40px;
  }
  .title {
    font-size: var(--fz64);
    line-height: 8rem;
    margin-bottom: 4rem;
  }
  .note {
    font-size: var(--fz24);
    line-height: 3.6rem;
  }
  .order {
    font-size: var(--fz24);
    line-height: 3.6rem;
    color: #686868;
  }
  .text-desc{
    font-size: var(--fz20);
    line-height: 3rem;
    color: #686868;
    max-width: 31.5rem;
  }
  .img{
    margin-left: auto;
    
  }
`;

export default HomeAutomate;
