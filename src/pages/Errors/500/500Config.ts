import {LoadableComponent} from '../../../components/Loadable';

export const Error500PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/errors/error-500',
            component: LoadableComponent({
                loader: () => import('./500')
            })
        }
    ]
};
