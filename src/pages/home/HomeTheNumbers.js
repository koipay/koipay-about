import React from 'react';
import styled from 'styled-components';
import { Container, FlexCenter } from '../../styles';

const HomeTheNumbers = () => {
  const datanumbers = [
    { number: '$1.9B+', text: 'Trading Volume' },
    { number: '300', text: 'Nice Parners' },
    { number: '700', text: 'Transactions' },
    { number: '7K', text: 'Happy Users' },
  ];
  return (
    <StyledTheNumbers>
      <Container>
        <div className="inner">
          <div className="list">
            {datanumbers.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="numbers">{item.number}</div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </StyledTheNumbers>
  );
};

const StyledTheNumbers = styled.div`
  background: #f1f1f1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  margin-top: 20rem;
  padding: 4rem;
  .inner {
    width: 100%;
  }
  .list {
    margin: auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .card {
    height: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    :last-child{
        border: 0;
    }
  }
  .numbers {
    font-weight: 500;
    font-size: 4rem;
    line-height: 4.5rem;
    color: #171d22;
  }
  .text {
    font-size: var(--fz20);
    line-height: 4.5rem;
    color: #171d22;
    margin-top: 2rem;
  }
`;

export default HomeTheNumbers;
