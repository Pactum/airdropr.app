import {LoadableComponent} from '../../../components/Loadable';

export const Error404PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/errors/error-404',
            component: LoadableComponent({
                loader: () => import('./404')
            })
        }
    ]
};
