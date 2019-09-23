import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const userRequest = () => action(typeActions.USER_REQUEST);
export const userSuccess = (user) => action(typeActions.USER_SUCCESS, { user });
export const userFail = () => action(typeActions.USER_FAIL);
