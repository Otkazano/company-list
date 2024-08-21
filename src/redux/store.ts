import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';

export const store = configureStore({
  reducer: {
    companies: companyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
