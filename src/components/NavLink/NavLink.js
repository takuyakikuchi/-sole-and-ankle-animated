import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  )
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  /* For flip-up animation */
  overflow: hidden;
  position: relative;
  display: block;
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--transform-from));

  ${Wrapper}:hover & {
    transform: translateY(var(--transform-to));
    transition: transform 250ms;
  }
`;

const MainText = styled(Text)`
  --transform-from: 0;
  --transform-to: -100%;
`;

const HoverText = styled(Text)`
  --transform-from: 100%;
  --transform-to: 0;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${Wrapper}:hover & {
    font-weight: ${WEIGHTS.bold};
  }
`;

export default NavLink;
