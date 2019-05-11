import {action} from 'typesafe-actions';
import {ApplicationActionTypes} from './application.types';

export const initializeApplication = () => action(ApplicationActionTypes.INITIALIZE);
