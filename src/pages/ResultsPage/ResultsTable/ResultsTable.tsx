import React from 'react';
import MaterialTable from 'material-table';
import { selectWalletAddress } from 'pages/redux';
import { useAppSelector } from 'redux/hooks';
import * as S from './ResultsTable.styled';

const ResultsTable = function ResultsTable({ results }:{ results: any }) {
  const walletAddress = useAppSelector(selectWalletAddress);
  const titleNames: any = {
    blocknumber: 'BLOCK',
    timestamp: 'DATE',
    blockhash: 'BLOCK HASH',
    transactionindex: 'TRANSACTION INDEX',
    gasprice: 'GAS PRICE',
    iserror: 'IS ERROR',
    contractaddress: 'CONTRACT ADDRESS',
    cumulativegasused: 'CUMULATIVE GAS USED',
    gasused: 'GAS USED',
    methodid: 'METHOD ID',
    functionname: 'FUNCTION NAME', 
  };

  const columns = Object.entries(results[0]).map(([key]) => {
    return {
      title: titleNames[key.toLowerCase()] ? titleNames[key.toLowerCase()] : key.toUpperCase(),
      field: key,
    };
  });

  return (
    <S.Container>
      <MaterialTable
        title={`Transactions for ${walletAddress}`}
        columns={columns}
        data={results}
        localization={{
          toolbar: { searchPlaceholder: 'Search' },
        }}
        options={{
          rowStyle: {
            fontSize: 15,
          },
          maxBodyHeight: '450px',
        }}
      />
    </S.Container>
  );
};

export default ResultsTable;
