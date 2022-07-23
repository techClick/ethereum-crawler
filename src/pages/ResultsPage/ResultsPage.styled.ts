import Color from 'color';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
`;

export const NewButton = styled.div`
  background: ${Color('grey').lighten(0.4).toString()};
  border-radius: 4px;
  height: 30px;
  width: max-content;
  padding: 0px 20px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    background: ${Color('grey').lighten(0.05).toString()};
  }
`;

export const PageName = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${Color('white').darken(0.8).toString()};
`;

export const Detail1 = styled.div` 
  font-size: 14px;
  font-weight: 300;
  margin-top: 0px;
`;

export const Detail = styled(Detail1)`
  margin-top: -3px;
`;
