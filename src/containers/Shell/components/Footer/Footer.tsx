import React from 'react';
import {AppBar, MuiThemeProvider, Toolbar, WithStyles, createStyles} from '@material-ui/core';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import {connect} from 'react-redux';
import PurchaseButton from '../shared-components/PurchaseButton';
import PoweredByLinks from '../shared-components/PoweredByLinks';

interface IFooter {
    classes: any;
    footerTheme: any;
    fuse: any;
}

const Footer: React.FunctionComponent<IFooter> = ({classes, footerTheme}) => {

    return (
        <MuiThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="px-16 py-0 flex items-center">

                    <div className="flex flex-1">
                        <PurchaseButton/>
                    </div>

                    <div>
                        <PoweredByLinks/>
                    </div>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        footerTheme: fuse.settings.footerTheme
    }
}

export default connect(mapStateToProps)(Footer);
