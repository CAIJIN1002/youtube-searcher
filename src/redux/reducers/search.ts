import produce from 'immer';
import { ActionTypes as PaginationTypes } from 'types/pagination';
import { ItemType } from 'types/search';
import { ActionTypes } from 'types/search';

const INITIAL_STATE = {
  video: {
    allIds: [],
    byVideoId: {},
  },
  pageOffset: 0,
  pageLimit: 10,
  loading: false,
  error: null,
};

export const search = produce((state = {}, action: any) => {
  switch (action.type) {
    case ActionTypes.SEARCH_VIDEO:
      state.loading = true;
      return state;

    case ActionTypes.SEARCH_SUCCESS:
      const result = action.payload;
      const formatResult = {
        byVideoId: result.items.reduce(
          (acc: ItemType, cur: ItemType) => ({
            ...acc,
            [cur.id.videoId]: cur,
          }),
          {}
        ),
        allIds: result.items.map((d: ItemType) => d.id.videoId),
      };
      return {
        ...state,
        video: formatResult,
        pageOffset: 0,
        loading: false,
        error: null,
      };

    case ActionTypes.SEARCH_FAIL:
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
      return state;

    case PaginationTypes.CHANGE_PAGE_OFFSET:
      const { pageOffset } = action.payload;
      state.pageOffset = pageOffset;
      return state;

    default:
      return state;
  }
}, INITIAL_STATE);
