import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfifg = {
  key: 'my-contacts-book',
  storage,
  blacklist: 'filter',
};

export const persistedReducer = persistReducer(persistConfifg, rootReducer);
