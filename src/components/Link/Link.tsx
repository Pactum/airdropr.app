import React, {FunctionComponent} from 'react';
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import MUILink, {LinkProps as MUILinkProps} from '@material-ui/core/Link';

export interface ILinkProps {
    children: React.ReactNode;
}

export const Link: FunctionComponent<ILinkProps & MUILinkProps & RouterLinkProps> = ({to, children, ...rest}) => (
    <MUILink
        {...rest}
        component={({innerRef, ...restOfMUILink}) => <RouterLink to={to} innerRef={innerRef as (node: HTMLAnchorElement | null) => void} {...restOfMUILink} />}
    >
        {children}
    </MUILink>
);
