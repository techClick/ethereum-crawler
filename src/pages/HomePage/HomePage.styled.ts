import Color from 'color';
import { buttonColor } from 'pages/styles';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
`;

export const WalletAdd = styled.div` 
  font-size: 25px;
  font-weight: 600;
`;

export const InputDiv = styled.div`
  display: flex;
  height: 45px;
  margin-top: 5px;
`;

export const Input = styled.input<any>` 
  width: 90%;
  max-width: 300px;
  height: 91%;
  padding: 0 7px;
  border: ${(props) => props.isError && '2px solid red'};
`;

export const AutoButton = styled.div`
  background: ${Color('grey').lighten(0.4).toString()};
  border-radius: 4px;
  height: 100%;
  width: max-content;
  padding: 0px 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${Color('grey').lighten(0.05).toString()};
  }
`;

export const Block = styled(WalletAdd)`
  margin-top: 30px;
`;

export const Optional = styled.div` 
  font-size: 13px;
  font-weight: 300;
  margin-top: -7px;
`;

export const Input2 = styled(Input)` 
  max-width: 200px;
`;

export const SelectDateButton = styled.div`
  background: ${Color('grey').lighten(0.7).toString()};
  height: 100%;
  width: max-content;
  padding: 0px 20px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${Color('grey').lighten(0.05).toString()};
  }
`;

export const SubmitButton = styled.div`
  color: white;
  background: ${Color(buttonColor).lighten(0.15).toString()};
  border-radius: 4px;
  margin-top: 35px;
  height: 50px;
  width: max-content;
  padding: 0px 20px;
  font-weight: 500;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${Color(buttonColor).darken(0.45).toString()};
  }
`;
