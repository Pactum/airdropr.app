import Loadable from 'react-loadable';
import Loading from './Loading';

/**
 * Loadable defaults
 * For to Avoid Repetition
 */
export const LoadableComponent = (opts: any) => {
    return Loadable(Object.assign({
        loading: Loading,
        delay  : 300,
        timeout: 10000
    }, opts));
};
