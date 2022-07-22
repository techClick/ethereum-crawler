import { configureStore, createSlice } from '@reduxjs/toolkit';
import pagesReducer from 'pages/redux';

export interface AppState {}

const initialState: AppState = {};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
  reducer: {
    public: counterSlice.reducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
