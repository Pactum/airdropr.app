import {createBrowserHistory, History} from 'history';

export const getHistory = (): History => {
    if (!window.historyInstance) {
        window.historyInstance = createBrowserHistory();
    }
    return window.historyInstance;
};
