import styled from 'styled-components';

export const toolsRes1 = 1222.22;
export const toolsRes2 = 801.6;
export const toolsRes3 = 289.6;
export const toolsRes4 = 217.6;
export const bigRes = 899.9999;
export const minRes = 599.9999;

export const RelativeContainer = styled.div<any>`
  height: 100%;
  position: relative;
  width: 100%;
  display: ${(props) => props.flex && 'flex'};
  align-items: ${(props) => props.flex && 'center'};
`;

export const Background = styled.div<any>`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.3;
`;
