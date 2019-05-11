import {History} from 'history';
import {compose} from 'redux';
import {IConfigurations} from './configurations';

declare global {
    interface Window {
        ethereum?: any;
        config?: IConfigurations;
        historyInstance?: History;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
