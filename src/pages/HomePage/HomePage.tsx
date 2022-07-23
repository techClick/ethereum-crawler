import {
  selectWalletAddress, walletAddress as setWalletAddress, block as setBlock,
  selectBlock, selectShowPopup, showPopup as setShowPopup, selectDate, date as setDate,
} from 'pages/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Background } from 'pages/styles';
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
  const [isBlockError, setIsBlockError] = useState<boolean>(false);
  const walletAddress = useAppSelector(selectWalletAddress);
  const block = useAppSelector(selectBlock);
  const date = useAppSelector(selectDate);
  const showPopup = useAppSelector(selectShowPopup);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    if (!walletAddress) setIsAddressError(true);
    if (!block) setIsBlockError(true);
    if (!walletAddress || !block) {
      toast('Both wallet address and block are required to proceed', { type: 'error' });
      return;
    }
    history.push('/results');
  };

  return (
    <>
      {showPopup.component
        && (
          <>
            <Background onClick={() => (
              showPopup.exitOnBgClick && dispatch(setShowPopup({}))
            )}
            />
            {showPopup.component}
          </>
        )}
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
        <S.InputDiv>
          <S.Input
            isError={isBlockError}
            type="number"
            value={block}
            onChange={(e: any) => {
              setIsBlockError(false);
              dispatch(setBlock(e.target.value));
            }}
          />
          <S.AutoButton
            onClick={() => dispatch(setBlock('9000000'))}
          >
            Use test block
          </S.AutoButton>
        </S.InputDiv>
        <S.Block>Date</S.Block>
        <S.Optional>Date is optional</S.Optional>
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
    </>
  );
};

export default HomePage;
