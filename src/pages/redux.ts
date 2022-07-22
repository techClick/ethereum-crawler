import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { callEndpoint } from '../endPoint/endPoint';
import { RootState } from '../redux/store';
import { IResponse } from '../types/types';

export interface ViewsState {
  settings: any;
}

const initialState: ViewsState = {
  settings: { isSortRow: [] },
};

export const counterSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setSettings2: (state, action: PayloadAction<any>) => {
      state.settings = { ...state.settings, [action.payload.key]: action.payload.setting };
    },
  },
});

export const { setSettings2 } = counterSlice.actions;

export const selectSettings2 = (state: RootState) => state.pages.settings;

export default counterSlice.reducer;

export const payBulk = () => async (dispatch: Function): Promise<IResponse> => {
  const response: IResponse = await dispatch(
    callEndpoint({ prefix: 1, api: 'V1.0/pay.php' }),
  );
  // console.log('FINAL', response);
  return response;
};
