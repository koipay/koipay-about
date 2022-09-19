import React from 'react';
import styled from 'styled-components';
import images from '../../assets/images';
import LayoutHome from '../../components/layout/LayoutHome';
import { FlexCenter } from '../../styles';
import HomeAutomate from './HomeAutomate';
import HomeBanner from './HomeBanner';
import HomeCoin from './HomeCoin';
import HomeTheNumbers from './HomeTheNumbers';

const Home = () => {
  const data = [
    {
      title: 'Fast and convenient',
      note: 'Every transaction is done quickly and easily. Contact-free payment options (e.g. QR codes canning) also eliminate the chance of virus transmission, protecting the health and safety of your customers.',
      img: images.fast,
      flex: false,
    },
    {
      title: 'Safety & Security',
      note: 'Every transaction is secured by trusted technology. KOIPAY is packed with features of high security, fraud prevention, revenue management, and global sales promotion.',
      img: images.safety,
      flex: true,
    },
    {
      title: 'Growth & Opportunities',
      note: 'Powerful tools to support your business activities. Smart e-commerce, rapid digital transformation, and powerful data-driven marketing capabilities enable you to grow your business like never before.',
      img: images.pc,
      flex: false,
    },
    {
      title: 'Accessibility',
      note: 'Transfer and receive funds from partners and customers worldwide',
      img: images.earth,
      flex: true,
    },
  ];
  return (
    <StyledHomeMain>
      <HomeBanner />
      <div className="main">
        <HomeAutomate />
      </div>
      <div className="main-sub">
        <HomeCoin />
        <HomeTheNumbers />
        <div className="text-title">
          <p>Together with KoiPay</p>
        </div>
        {data.map((item, index) => {
          return (
            <LayoutHome
              title={item.title}
              note={item.note}
              img={item.img}
              key={index}
              flex={item.flex}
            />
          );
        })}
      </div>
      <div className="contai">
        <div className="main-second"></div>
      </div>
    </StyledHomeMain>
  );
};
const StyledHomeMain = styled.div`
  .text-title {
    ${FlexCenter()}
    margin-top: 20rem;
    margin-bottom: 12.1rem;
    p {
      color: var(--blue);
      font-weight: 600;
      font-size: var(--fz70);
      line-height: 9rem;
      letter-spacing: 1.5px;
      margin: 0 auto;
      display: inline-block;
    }
  }
  .main-sub {
    padding-top: 20rem;
    color: var(--gray);
    background: var(--white);
  }
  .main {
    padding-top: 40rem;
    background: var(--white);
    clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);
    color: var(--gray);
  }
  .contai {
    background: var(--white);
  }
  .main-second {
    height: 300px;
    clip-path: polygon(0 60%, 100% 0%, 100% 100%, 0% 100%);
    background: var(--gray);
  }
`;
export default Home;
