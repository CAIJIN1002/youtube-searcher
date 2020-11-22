import {
  ActionTypes,
  SearchSuccess,
  SearchVideoByError,
  SearchVideoPayload,
} from 'types/search';
import { createAction } from 'typesafe-actions';
import { ActionType, createAsyncAction } from 'typesafe-actions';

export const searchVideo = createAsyncAction(
  'SEARCH_VIDEO',
  'SEARCH_SUCCESS',
  'SEARCH_FAIL'
)<SearchVideoPayload, SearchSuccess, SearchVideoByError>();

export const searchVideoAction = createAction(
  ActionTypes.SEARCH_VIDEO,
  action => (query: string) => action({ query })
);

export type RequestActionTypes = ActionType<typeof searchVideo.request>;

const actionList = {
  searchVideoAction,
};

export type RootActions = ActionType<typeof actionList>;
