import {action} from 'typesafe-actions';
import {AppActionTypes} from './app.types';

export const initializeApplication = () => action(AppActionTypes.INITIALIZE);
