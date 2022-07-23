import Color from 'color';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
`;

export const PageName = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 55px;
  color: ${Color('white').darken(0.8).toString()};
`;
