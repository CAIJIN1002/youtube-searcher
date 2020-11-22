import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { search } from './search';

export const rootReducer = combineReducers({
  search,
});

export type RootState = StateType<typeof rootReducer>;
