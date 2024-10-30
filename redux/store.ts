import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '@/services/user'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const store = configureStore({
  reducer: {[userApi.reducerPath]: userApi.reducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
setupListeners(store.dispatch)
export  {store};
