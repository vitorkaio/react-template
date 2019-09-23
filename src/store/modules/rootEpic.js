import { combineEpics } from 'redux-observable';
import { userEpic } from './user/epics';

const epics = [
  userEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
