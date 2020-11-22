import config from 'config';
import { ActionsObservable } from 'redux-observable';
import { RequestActionTypes, RootActions } from 'redux/actions/search';
import { searchVideo } from 'redux/actions/search';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { getType, isOfType } from 'typesafe-actions';

export const searchEpic = (action$: ActionsObservable<RootActions>) =>
  action$.pipe(
    filter(isOfType(getType(searchVideo.request))),
    mergeMap((action: RequestActionTypes) =>
      ajax({
        url: config.youtube.urls.getSearchUrl.apply(config, [
          action.payload.query,
        ]),
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        map(({ response }) => searchVideo.success(response)),
        catchError(error =>
          of({
            type: getType(searchVideo.failure),
            payload: error.xhr.response,
            error: true,
          })
        )
      )
    )
  );
