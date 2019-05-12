import {LoadableComponent} from '../../components/Loadable';

export const PricingStyle3PageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/pricing/style-3',
            component: LoadableComponent({
                loader: () => import('./Pricing')
            })
        }
    ]
};
