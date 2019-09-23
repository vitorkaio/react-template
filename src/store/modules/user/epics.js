import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as userActions from './actions';
import * as githubApi from 'services/githubApi';

// ***************************** READ User *****************************

export const userEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.USER_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (_) => {
    const user = await githubApi.getUser()
    if (user) {
      // const timer = store.value.imgsReducer.timer;
      return userActions.userSuccess(user);
    }
    return userActions.userFail()
  }),
);