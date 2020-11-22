import { ActionTypes } from 'types/pagination';
import { createAction } from 'typesafe-actions';

export interface PaginationPayload {
  pageOffset: number;
}

export const changePageOffset = createAction(
  ActionTypes.CHANGE_PAGE_OFFSET,
  action => (pageOffset: number) => action({ pageOffset })
);
