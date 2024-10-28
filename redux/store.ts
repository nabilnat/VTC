import authReducer from './reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

// Définir les types RootState et AppDispatch à partir du store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;