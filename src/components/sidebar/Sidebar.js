import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../button/Button';
import { datamenu, StyledMenu } from '../header/Header';

const Sidebar = ({ setHideShowHeader, HideShowHeader }) => {
  return (
    <StyledSidebar HideShowHeader={HideShowHeader}>
      <div className="icon" onClick={() => setHideShowHeader(false)}>
        <Icon icon="bi:x"></Icon>
      </div>
      <StyledMenuSidebar>
        {datamenu.map((li, index) => {
          return (
            <li key={index} className="menu-item">
              <Link to={li.link}>{li.name}</Link>
            </li>
          );
        })}
      </StyledMenuSidebar>
      <Button className="btn">Log In</Button>
    </StyledSidebar>
  );
};
const StyledMenuSidebar = styled(StyledMenu)`
  flex-direction: column;
  margin-top: 120px;
  display: flex;
  .menu-item {
    font-weight: 600;
    font-size: 20px;
    color: var(--white);
  }
`;
const StyledSidebar = styled.div`
  position: fixed;
  z-index: 99;
  background: #2b2b2b;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
  ${({ HideShowHeader }) =>
    HideShowHeader &&
    css`
      transform: translateY(0);
    `}
  .btn {
    margin: 0 auto;
    margin-top: 150px;
    width: 130px;
  }
  .icon {
    position: absolute;
    right: 20px;
    top: 20px;
    svg {
      font-size: 3.5rem;
    }
  }
`;

export default Sidebar;
