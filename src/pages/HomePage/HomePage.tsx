import {
  selectWalletAddress, walletAddress as setWalletAddress, block as setBlock,
  selectBlock, showPopup as setShowPopup, selectDate, date as setDate,
} from 'pages/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getDateFormat } from 'pages/utils';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from 'redux/hooks';
import CalendarParts from './CalendarParts/CalendarParts';
import * as S from './HomePage.styled';

const HomePage = function HomePage() {
  const [isAddressError, setIsAddressError] = useState<boolean>(false);
  const walletAddress = useAppSelector(selectWalletAddress);
  const block = useAppSelector(selectBlock);
  const date = useAppSelector(selectDate);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    if (!walletAddress) {
      setIsAddressError(true);
      toast('Wallet address is required to proceed', { type: 'error' });
      return;
    }
    if ((!block && !date)) {
      toast('Block or date is required to proceed', { type: 'error' });
      return;
    }
    history.push('/results');
  };

  return (
    <S.Container>
      <S.PageName>ETHEREUM CRAWLER</S.PageName>
      <S.WalletAdd>Wallet Address</S.WalletAdd>
      <S.InputDiv>
        <S.Input
          isError={isAddressError}
          value={walletAddress}
          onChange={(e: any) => {
            setIsAddressError(false);
            dispatch(setWalletAddress(e.target.value));
          }}
        />
        <S.AutoButton
          onClick={() => dispatch(setWalletAddress('0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f'))}
        >
          Use test address
        </S.AutoButton>
      </S.InputDiv>
      <S.Block>Block</S.Block>
      <S.Optional>Shows transactions starting from given block</S.Optional>
      <S.InputDiv>
        <S.Input
          type="number"
          value={block}
          onChange={(e: any) => {
            dispatch(setDate(null));
            dispatch(setBlock(e.target.value));
          }}
        />
        <S.AutoButton
          onClick={() => {
            dispatch(setDate(null));
            dispatch(setBlock('9000000'));
          }}
        >
          Use test block
        </S.AutoButton>
      </S.InputDiv>
      <S.Block>Date</S.Block>
      <S.Optional>Shows ETH balance at given date</S.Optional>
      <S.InputDiv>
        <S.Input2Div>
          <S.Input2
            disabled
            value={getDateFormat(date)}
          />
          <S.EscapeIconCont>
            <S.EscapeIcon
              onClick={() => dispatch(setDate(null))}
            >
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </S.EscapeIcon>
          </S.EscapeIconCont>
        </S.Input2Div>
        <S.SelectDateButton
          onClick={() => {
            dispatch(setShowPopup({ component: <CalendarParts />, exitOnBgClick: true }));
          }}
        >
          Select date
        </S.SelectDateButton>
        <S.AutoButton
          onClick={() => {
            dispatch(setBlock(''));
            dispatch(setDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1))));
          }}
        >
          Use test date
        </S.AutoButton>
      </S.InputDiv>
      <S.SubmitButton
        onClick={() => handleSubmit()}
      >
        Submit
      </S.SubmitButton>
    </S.Container>
  );
};

export default HomePage;
