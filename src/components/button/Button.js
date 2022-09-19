import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Border, FlexCenter } from '../../styles';

const Button = ({
  type = 'button',
  onClick = () => null,
  link,
  children,
  small,
  className,
  ...props
}) => {
  const button = () => (
    <StyledButton
      type={type}
      onClick={onClick}
      small={small}
      second={props.second}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
  return <>{link ? <Link to={link}>{button()}</Link> : button()}</>;
};
const StyledButton = styled.button`
  background: var(--pri);
  padding: 1.3rem;
  height: 5.6rem;
  border-radius: 10px;
  color: var(--white);
  font-weight: 500;
  font-size: var(--fz20);
  line-height: 3rem;
  ${FlexCenter};
  &:hover {
    opacity: 0.95;
  }
  ${(props) =>
    props.small &&
    css`
      height: 4rem;
      font-size: var(--fz16);
      width: 10rem;
      border-radius: 6px;
      :hover {
        opacity: 0.9;
      }
    `};
  ${(props) =>
    props.second &&
    css`
      position: relative;
      background-clip: padding-box;
      border: ${Border('transparent')};
      /* transition: 0.3s linear; */
      background: #2b2b2b;

      ::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background-image: var(--pri);
      }
      :hover {
        background: var(--pri);
        opacity: 1;
        ::before {
        }
      }
    `};
`;
export default Button;
