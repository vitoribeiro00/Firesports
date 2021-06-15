  
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from './modules/rootReducer';

export default () =>  {
  const persistedReducer = persistReducer(
    {
      key: 'firesports',
      storage,
      whitelist: ['auth', 'jogo'],
    },
    allReducers,
  );

  return persistedReducer;
};