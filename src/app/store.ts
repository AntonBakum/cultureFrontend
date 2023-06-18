import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import initiativesReducer from '../slices/initiativesSlice';
import userReducer from '../slices/userSlice';
import newsReducer from '../slices/newsSlice';


export const store = configureStore({
  reducer: {
    initiatives: initiativesReducer,
    user: userReducer,
    news: newsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;