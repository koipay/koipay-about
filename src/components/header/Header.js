import React from 'react';
import styled, { css } from 'styled-components';
import images from '../../assets/images';
import { Container, FlexCenter, media } from '../../styles';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { Icon } from '@iconify/react';
export const datamenu = [
  {
    name: 'Guides',
    link: '/',
  },
  {
    name: 'Developer',
    link: '/',
  },
  {
    name: 'Docs',
    link: '/',
  },
];
const Header = ({ setHideShowHeader }) => {
  return (
    <StyledHeader>
      <Container>
        <div className="inner">
          <div className="header-logo">
            <Link to="/">
              <img src={images.logo} alt="Koipay" />
            </Link>
          </div>
          <StyledMenu>
            {datamenu.map((li, index) => {
              return (
                <li key={index} className="menu-item">
                  <Link to={li.link}>{li.name}</Link>
                </li>
              );
            })}
          </StyledMenu>
          <StyledMenuButton>
            <Button small second>
              Sign Up
            </Button>
            <Button small>Log In</Button>
          </StyledMenuButton>
          <div
            className="header-icon-menu"
            onClick={() => setHideShowHeader(true)}
          >
            <Icon icon="dashicons:menu"></Icon>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

const StyledMenuButton = styled.div`
  ${FlexCenter('', 2.4)}
  ${media.sm`
        display: none;
    `}
`;
export const StyledMenu = styled.ul`
  ${FlexCenter('fa', 4.6)};
  .menu-item {
    color: #bdbdbd;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      color: var(--blue);
    }
  }
  ${media.sm`
        display: none;
    `}
`;
const StyledHeader = styled.div`
  padding: 35px 0px;
  .header-icon-menu {
    svg {
      font-size: 30px;
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
    
  }
  .inner {
    ${FlexCenter('between')}
  }
  .header-logo {
    ${media.sm `
      max-width: 120px;
    `}
  }
  ${media.sm`
    padding: 20px 10px;
  `}
`;

export default Header;
