import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { callEndpoint } from '../endPoint/endPoint';
import { RootState } from '../redux/store';
import { IResponse, ShowPopup } from '../types/types';

export interface ViewsState {
  walletAddress: string,
  block: string,
  date: Date | null,
  showPopup: ShowPopup,
}

const initialState: ViewsState = {
  walletAddress: '',
  block: '',
  showPopup: {},
  date: null,
};

export const counterSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    walletAddress: (state, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
    },
    block: (state, action: PayloadAction<string>) => {
      state.block = action.payload;
    },
    showPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    date: (state, action: PayloadAction<Date | null>) => {
      state.date = action.payload;
    },
  },
});

export const { walletAddress, block, showPopup, date } = counterSlice.actions;

export const selectWalletAddress = (state: RootState) => state.pages.walletAddress;

export const selectBlock = (state: RootState) => state.pages.block;

export const selectShowPopup = (state: RootState) => state.pages.showPopup;

export const selectDate = (state: RootState) => state.pages.date;

export default counterSlice.reducer;

export const getTransactions = (
  address: string, blockNumber: number, lastBlock: number,
) => async (dispatch: Function): Promise<IResponse> => {
  const tempKey = 'VGZKJM4UEK8Y4VGZH25I7HVGIGKD4TM724';
  const response: IResponse = await dispatch(
    callEndpoint({ api: `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${blockNumber}&endblock=${lastBlock}&sort=asc&apikey=${tempKey}` }),
  );
  console.log('FINAL', response);
  return response;
};
