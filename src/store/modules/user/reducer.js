import * as typeActions from './typeActions';
import { produce } from 'immer';

const userInitial = {
  user: {},
  load: false,
  error: false,
};

const userReducer = (state = userInitial, action) => {
  switch (action.type) {

    case typeActions.USER_REQUEST:
      return produce(state, draft => {
        draft.load = true;
        draft.error = false;
      });

    case typeActions.USER_SUCCESS:
      return produce(state, draft => {
        draft.user = action.payload.user;
        draft.load = false;
        draft.error = false;
      })

    case typeActions.USER_FAIL:
      return produce(state, draft => {
        draft.user = {};
        draft.load = false;
        draft.error = true;
      })

    default:
      return state;
  }
}; // Fim do reducers

export default userReducer;