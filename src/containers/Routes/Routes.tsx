import React from 'react';
import {Switch} from 'react-router';
import {AppRoute, AccessRestriction} from '../AppRoute';
import {Home} from '../../pages/Home';

export const Routes = () => (
    <Switch>
        <AppRoute exact path="/" accessRestriction={AccessRestriction.public} component={Home}/>
        <AppRoute exact path="*" accessRestriction={AccessRestriction.public} component={Home}/>
    </Switch>
);
