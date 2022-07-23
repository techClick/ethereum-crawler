import {
  selectWalletAddress, walletAddress as setWalletAddress, block as setBlock,
  selectBlock, selectShowPopup, showPopup as setShowPopup,
} from 'pages/redux';
import { Background } from 'pages/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useAppSelector } from 'redux/hooks';
import CalendarParts from './CalendarParts/CalendarParts';
import * as S from './HomePage.styled';

const HomePage = function HomePage() {
  const [isAddressError, setIsAddressError] = useState<boolean>(false);
  const [isBlockError, setIsBlockError] = useState<boolean>(false);
  const walletAddress = useAppSelector(selectWalletAddress);
  const block = useAppSelector(selectBlock);
  const showPopup = useAppSelector(selectShowPopup);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!walletAddress) setIsAddressError(true);
    if (!block) setIsBlockError(true);
    if (!walletAddress || !block) {
      toast('Both wallet address and block are required to proceed', { type: 'error' });
      return;
    }
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
          <S.AutoButton>
            Use test Address
          </S.AutoButton>
        </S.InputDiv>
        <S.Block>Block</S.Block>
        <S.InputDiv>
          <S.Input
            isError={isBlockError}
            value={block}
            onChange={(e: any) => {
              setIsBlockError(false);
              dispatch(setBlock(e.target.value));
            }}
          />
          <S.AutoButton>
            Use test Block
          </S.AutoButton>
        </S.InputDiv>
        <S.Block>Date</S.Block>
        <S.Optional>Date is optional</S.Optional>
        <S.InputDiv>
          <S.Input2
            disabled
          />
          <S.SelectDateButton
            onClick={() => {
              dispatch(setShowPopup({ component: <CalendarParts />, exitOnBgClick: true }));
            }}
          >
            Select date
          </S.SelectDateButton>
          <S.AutoButton>
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
