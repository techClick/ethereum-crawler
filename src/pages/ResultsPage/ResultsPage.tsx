import { getTransactions, selectBlock, selectDate, selectWalletAddress } from 'pages/redux';
import { getDateFormat } from 'pages/utils';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import * as S from './ResultsPage.styled';

const ResultsPage = function ResultsPage() {
  const [latestBlockNumber, setLatestBlockNumber] = useState<any>();
  const walletAddress = useAppSelector(selectWalletAddress);
  const block = Number(useAppSelector(selectBlock));
  const date = useAppSelector(selectDate);
  const history = useHistory();
  const dispatch = useDispatch();
  const web3 = new Web3(new Web3.providers.WebsocketProvider(
    'wss://rinkeby.infura.io/ws/v3/26f37a587771456faef3d2f0dba4b167',
  ));

  useEffect(() => {
    const getBlockData = async () => {
      const latestBlock = await web3.eth.getBlock('latest');
      setLatestBlockNumber(latestBlock.number);
      const lastBlockNumber = latestBlock.number;
      const response: any = dispatch(getTransactions(walletAddress, block, lastBlockNumber));
    };
    if (block && walletAddress) {
      getBlockData();
    } else {
      history.push('/');
    }
  }, []);

  return (
    <S.Container>
      <S.NewButton
        onClick={() => history.push('/')}
      >
        New search
      </S.NewButton>
      <S.PageName>SEARCH RESULT</S.PageName>
      <S.Detail1>{`ADDRESS: ${walletAddress}`}</S.Detail1>
      { latestBlockNumber && <S.Detail>{`BLOCK: ${block} - ${latestBlockNumber}`}</S.Detail>}
      { date && <S.Detail>{getDateFormat(date)}</S.Detail>}
    </S.Container>
  );
};

export default ResultsPage;
