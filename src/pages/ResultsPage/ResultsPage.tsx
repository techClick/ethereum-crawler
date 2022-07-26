import { getAllTransactions, getTransactions, selectBlock, selectDate, selectWalletAddress, showPopup } from 'pages/redux';
import { getDateFormat } from 'pages/utils';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import * as S from './ResultsPage.styled';
import ResultsTable from './ResultsTable/ResultsTable';
import Loading from './Loading/Loading';

const ResultsPage = function ResultsPage() {
  const [latestBlockNumber, setLatestBlockNumber] = useState<any>();
  const [searchResults, setSearchResults] = useState<any>();
  const walletAddress = useAppSelector(selectWalletAddress);
  const block = Number(useAppSelector(selectBlock));
  const date = useAppSelector(selectDate);
  const history = useHistory();
  const dispatch = useDispatch();
  const web3 = new Web3(new Web3.providers.WebsocketProvider(
    'wss://rinkeby.infura.io/ws/v3/26f37a587771456faef3d2f0dba4b167',
  ));
  const getBlockData = async () => {
    dispatch(showPopup({ component: <Loading text="Fetching latest block" /> }));
    const latestBlock = await web3.eth.getBlock('latest');
    dispatch(showPopup({ component: <Loading text="Fetching transactions by block. This should take less than 30 secs." /> }));
    setLatestBlockNumber(latestBlock.number);
    const lastBlockNumber = latestBlock.number;
    const response: any = await dispatch(getTransactions(walletAddress, block, lastBlockNumber));
    dispatch(showPopup({}));
    if (response.status === 'success') {
      const results = response.data.map((item: any) => {
        return {
          ...item,
          timeStamp: getDateFormat(new Date(item.timeStamp * 1000)),
        };
      });
      setSearchResults(results);
    }
  };

  const getDateData = async () => {
    dispatch(showPopup({ component: <Loading text="Fetching transactions by date. This should take less than 30 secs." /> }));
    const transactions: any = [];
    let startBlock: number = 0;
    for (let i = 0; i < 10; i += 1) {
      const response: any = await dispatch(getAllTransactions(walletAddress, startBlock));
      if (response.status === 'success') {
        const newTransactions = transactions.length > 1
          ? response.data.splice(1, response.data.length - 1) : response.data;
        console.log('HAs found', newTransactions);
        transactions.push(...newTransactions);
        startBlock = transactions[transactions.length - 1].blockNumber;
      }
    }
    console.log(transactions);
    dispatch(showPopup({}));
  };

  useEffect(() => {
    if (block && walletAddress) {
      getBlockData();
    } else if (date && walletAddress) {
      getDateData();
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
      { latestBlockNumber && <S.Detail>{`BLOCK: ${block} - ${latestBlockNumber}`}</S.Detail>}
      { date && <S.Detail>{getDateFormat(date)}</S.Detail>}
      {searchResults && <ResultsTable results={searchResults} />}
    </S.Container>
  );
};

export default ResultsPage;
