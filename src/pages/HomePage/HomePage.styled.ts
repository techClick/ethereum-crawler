import Color from 'color';
import { buttonColor } from 'pages/styles';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 40px;
  min-width: 574px;
`;

export const PageName = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 55px;
  color: ${Color('white').darken(0.8).toString()};
`;

export const WalletAdd = styled.div` 
  font-size: 22px;
  font-weight: 600;
`;

export const InputDiv = styled.div`
  display: flex;
  height: 45px;
  margin-top: 5px;
`;

export const Input = styled.input<any>`
  width: 330px;
  height: 91%;
  padding: 0 9px;
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

export const Input2Div = styled.div`
  position: relative;
`;

export const Input2 = styled(Input)` 
  width: 150px;
`;

export const EscapeIconCont = styled.div` 
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 8px;
  color: grey;
`;

export const EscapeIcon = styled.div`
  transform: scale(0.5);
  cursor: pointer;
  &:hover {
    color: black;
  }
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
