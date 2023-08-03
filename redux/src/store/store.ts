import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice';
import { userSlice } from './user/user.slice';
import { api } from './api/api';

const reducers = combineReducers({
  favorites: favoritesReducer,
  users: userSlice.reducer,
  [api.reducerPath]: api.reducer,
}); //Для добавления редюсеров
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
